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
        this.container.append(title);
        return this.container;
    }
}
export default MainPage;