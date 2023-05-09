/**
* @description:
* @author
* @date 2023-01-15 00:00:06
* @version 1.0 
*
* Change Logs:
* Date           Author       Notes
*
*/
import HtmlResponseBuilder from "../../../server/responseBuilder/htmlResponseBuilder.js"



export default class Error404Page extends HtmlResponseBuilder {

    #request
    #error
    
    constructor(request, response){
        super(request, response, 404)
        this.#request = request
        this.#error =`${request.url} not found`
    }

    createPayload(){
        this.payload = `<h1>404 : ${this.#error}</h1>`
        return this
    }

}