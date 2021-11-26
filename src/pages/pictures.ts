import Page from "../main/page-template";

class PicturesPage extends Page {
    static TextObject = {
        MainTitle: "PicturesPage",
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