
import fs from 'fs'
import path from "path";

export default class ResponseBuilder {

    #response
    #request
    #statusCode
    #contentType
    #payload

    constructor(request, response, statusCode, contentType) {
        this.#response = response
        this.#request = request
        this.#statusCode = statusCode
        this.#contentType = contentType
    }

    set payload(payload) {
        this.#payload = payload
    }

    prepareResponse() {
        this.#response.statusCode = this.#statusCode
        this.#response.setHeader('Content-Type', this.#contentType)
        return this

    }

    buildResponse() {
        this.#response.write(this.#payload)
        this.#response.end()
    }

    createPayload() {
        this.#payload = fs.readFileSync(path.join('.', this.#request.url))
        return this
    }

}