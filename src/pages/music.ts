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
        this.container.append(title);
        return this.container;
    }
}
export default MusicPage;