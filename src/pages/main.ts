import Page from "../main/page-template"

class MainPage extends Page {
    static TextObject = {
        MainTitle: "Main page",
    };

    constructor(id: string) {
        super('main-page');
        
    }
    render() {
        const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);
        const mainBox = this.createHTMLElement('div')
        this.container.append(title)
        this.container.insertAdjacentElement("beforeend", mainBox)
        return this.container;
    }
}
export default MainPage;