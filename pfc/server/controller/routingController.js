import IndexPage from "../pages/indexPage.js"
import AboutPage from "../pages/aboutPage.js";
import PfcPage from "../pages/pfcPage.js";
import Error404Page from "../pages/error/404Pages.js";
import Error500Page from "../pages/error/500Pages.js";
import StaticRessourceResponseBuilder from "../responseBuilder/staticRessourceResponseBuilder.js";
import JsResponseBuilder from "../responseBuilder/jsResponseBuilder.js";
import CssResponseBuilder from "../responseBuilder/cssResponseBuilder.js";
import PngResponseBuilder from "../responseBuilder/pngResponseBuilder.js";

export default class RoutingController {
    #request;
    #response;

    constructor(request, response) {
        this.#request = request;
        this.#response = response;

    }

    handleRequest() {

        let response = this.#response

        try {
            if (this.#request.url == '/') {
                response = new IndexPage(this.#request, this.#response)
            } else if (this.#request.url == '/about') {
                response = new AboutPage(this.#request, this.#response)
            } else if (this.#request.url == '/pfc') {
                response = new PfcPage(this.#request, this.#response)
            } else if (this.#request.url.startsWith('/public')) {

                if(this.#request.url.endsWith('.js')){
                    response = new JsResponseBuilder(this.#request, this.#response)
                } else if(this.#request.url.endsWith('.css')){
                    response = new CssResponseBuilder(this.#request, this.#response)
                } else{
                    response = new PngResponseBuilder(this.#request, this.#response)
                }

            } else {
                response = new Error404Page(this.#request, this.#response)
            }
            response.prepareResponse()
                    .createPayload()
                    .buildResponse()    

        } catch (err) {

            console.error(err)
            
            new Error500Page(this.#request, this.#response)
                    .prepareResponse()
                    .createPayload()


        }

    }

}