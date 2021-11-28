import Page from "../main/page-template";

class ErrorPage extends Page {

    private errorType: string;

static TextObject: {[prop: string]: string} = {
        '404': "Error! Page is not found",
    };

    constructor(id: string, errotType: string) {
        super(id)
        this.errorType = errotType;
    }

    render() {
        const tittle = this.createHeaderTitle(ErrorPage.TextObject[this.errorType])
        this.container.append(tittle);
        return this.container;
    }
}

export default ErrorPage;