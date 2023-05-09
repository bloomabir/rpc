
import ResponseBuilder from "./responseBuilder.js";
import fs from "fs"
import path from "path";

export default class StaticRessourceResponseBuilder extends ResponseBuilder {
    #request
    constructor(request,response){
        super(request, response, 200, 'text/plain')
        this.#request = request
    }

    createPayload(){
        const pathName = this.#request.url
        this.payload = fs.readFileSync(path.join('.', pathName))
        return this
    }
}
