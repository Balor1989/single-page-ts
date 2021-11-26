import Page from "../main/page-template";

class VideosPage extends Page {
    static TextObject = {
        VideosTitle: "Videos",
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(VideosPage.TextObject.VideosTitle);
        this.container.append(title);
        return this.container;
    }
}
export default VideosPage;