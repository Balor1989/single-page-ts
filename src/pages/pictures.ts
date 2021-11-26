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
        this.container.append(title);
        return this.container;
    }
}
export default PicturesPage;