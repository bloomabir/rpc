
const socket = io();

let whoami = null
socket.on('welcome', (id) => {
    whoami = id
    console.log(whoami)
})


socket.on('ready', () => {
    console.log("ready to play")
    document.getElementById('buttons').childNodes.forEach(element => {
        if (element.innerHTML != null) {
            element.disabled = false
            element.style.setProperty('cursor', 'pointer')
        }
    });

    document.getElementById("messageZone").textContent = "You can play";
})


socket.on("full", () => {
    document.getElementById("messageZone").textContent = "Game full, come back later";
})


socket.on('result', (results) => {
    if (results === 'tie') {
        document.getElementById("messageZone").textContent = "it's a tie"
    } else if (results[0] == whoami) {
        document.getElementById("messageZone").textContent = "you win"
    } else if (results[1] == whoami) {
        document.getElementById("messageZone").textContent = "you lose"
    }

    socket.emit('playAgain')
})

const clickBtn = (element, event) => {
    element.style.border = "3px solid #db1a27";

    document.getElementById('buttons').childNodes.forEach(e => {
        if (e.innerHTML != null) {
            e.disabled = true
            e.style.setProperty('cursor', 'auto')
        }
    });

    socket.emit('play', { id: whoami, event: event })
}