import Page from "../main/page-template";

class PicturesPage extends Page {
    static TextObject = {
        PicturesTitle: "Pictures",
    };

    constructor(id: string) {
        super(id);      
    }
    render() {
        const title = this.createHeaderTitle(PicturesPage.TextObject.PicturesTitle)
        this.container.append(title);
        return this.container;
    }
}
export default PicturesPage;