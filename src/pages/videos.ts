import Page from "../main/page-template";

class VideosPage extends Page {
    static TextObject = {
        MainTitle: "Videos Page",
    };

    constructor(id: string) {
        super(id);
        
    }

    render() {
        const title = this.createHeaderTitle(VideosPage.TextObject.MainTitle);
        this.container.append(title);
        return this.container;
    }
}
export default VideosPage;