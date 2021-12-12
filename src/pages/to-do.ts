import Page from "../main/page-template";

class ToDoPage extends Page {
    static TextObject = {
        MainTitle: "Todo Page",
    };

    constructor(id: string) {
        super(id);
    }
    render() {
        const title = this.createHeaderTitle(ToDoPage.TextObject.MainTitle)
        const mainBox = this.createHTMLElement('div')
        mainBox.classList.add('main-box')
        this.container.append(title)
        this.container.insertAdjacentElement("beforeend", mainBox)
        return this.container;
    }
}
export default ToDoPage;

