import http from 'http'
import RoutingController from './server/controller/routingController.js';
const port = 8080

import { Server as IOServer } from 'socket.io';
const server = http.createServer(
    (request, response) =>
        new RoutingController(request, response).handleRequest());

// mise en place du serveur de socket.io
const io = new IOServer(server);


let players = [];
let events = []

let variations = [
    ['rock', 'cissors'],
    ['cissors', 'paper'],
    ['paper', 'rock']
]

const gameLogic = (events) => {
    if (events[0].event === events[1].event) {
        return 'tie'
    }

    let map = events.reduce((m, obj) => {
        m[obj.event] = obj.id;
        return m;
    }, new Map());

    let result = null

    variations.forEach(variation => {
        if (variation.includes(Object.keys(map)[0]) && variation.includes(Object.keys(map)[1])) {
            result = [map[variation[0]], map[variation[1]]]
        }
    })

    return result
}

io.on('connection', (socket) => {
    socket.emit('welcome', socket.id)

    if (!players.includes(socket.id)) {
        players.push(socket.id)
        console.log(`new player connected ${socket.id}`)
    }

    if (players.length == 2) {
        io.emit('ready')
    }

    socket.on('play', (event) => {
        events.push(event)
        if (events.length == 2) {
            let results = gameLogic(events)
            io.emit('result', results)
        }
    })

    socket.on('playAgain', () => {
        players = [];
        events = []
    })

});

io.on('connect', (socket) => {

    if ((players.length >= 2)) {
        socket.emit('full')
    }

});

server.listen(port);
