/**
* @description:
* @author
* @date 2023-01-16 00:04:04
* @version 1.0 
*
* Change Logs:
* Date           Author       Notes
*
*/
import HtmlResponseBuilder from "../../../server/responseBuilder/htmlResponseBuilder.js"

 

export default class Error500Page extends HtmlResponseBuilder {

    constructor(request, response){
        super(request, response, 500)        
    }

    createPayload(){
        this.payload = `<h1>500 : Internal Server Error</h1>`
        return this
    }

}