
import HtmlResponseBuilder from "../responseBuilder/htmlResponseBuilder.js"
import fs from 'fs'



export default class IndexPage extends HtmlResponseBuilder {

    constructor(request, response){
        super(request, response)
    }
    
    createPayload() {
        let payload = fs.readFileSync('./public/index.html', 'utf8')

        if(payload){
            this.payload = payload.replace('{date}', new Date().toISOString())
        }
        return this
    }

}

