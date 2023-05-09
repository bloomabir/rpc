import ResponseBuilder from "./responseBuilder.js";

export default class HtmlResponseBuilder extends ResponseBuilder {
    constructor(request, response, statusCode) {
        super(request, response, statusCode != null ? statusCode : 200, 'text/html')
    }
}
