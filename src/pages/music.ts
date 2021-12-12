import Page from "../main/page-template";

class MusicPage extends Page {
    static TextObject = {
        MainTitle: "Music Page",
    };

    constructor(id: string) {
        super(id);
    }
    render() {
        const title = this.createHeaderTitle(MusicPage.TextObject.MainTitle)
        const mainBox = this.createHTMLElement('div')
        this.container.append(title)
        this.container.insertAdjacentElement("beforeend", mainBox)
        return this.container;
    }
}
export default MusicPage;