/**
* @description:
* @author
* @date 2023-01-14 23:34:22
* @version 1.0 
*
* Change Logs:
* Date           Author       Notes
*
*/
import HtmlResponseBuilder from "../../server/responseBuilder/htmlResponseBuilder.js";
import fs from 'fs'



export default class PfcPage extends HtmlResponseBuilder {

    constructor(request, response) {
        super(request, response)
    }

    createPayload() {
        let payload = fs.readFileSync('./public/pfc.html', 'utf8')
        if (payload) {
            // this.payload has to be initiated for the parent class
            this.payload = payload.replace('{date}', new Date().toISOString())
        }
        return this
    }
    

}
