import Page from "../main/page-template";

class PicturesPage extends Page {
    static TextObject = {
        MainTitle: "Pictures Page",
    };

    constructor(id: string) {
        super(id);
    }
    render() {
        const title = this.createHeaderTitle(PicturesPage.TextObject.MainTitle)
        const mainBox = this.createHTMLElement('div')
        mainBox.classList.add('main-box')
        this.container.append(title)
        this.container.insertAdjacentElement("beforeend", mainBox)
        return this.container;
    }
}
export default PicturesPage;