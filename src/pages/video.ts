import Page from "../main/page-template";

class VideoPage extends Page {
    static TextObject = {
        MainTitle: "Video Page",
    };

    constructor(id: string) {
        super(id);
        
    }

    render() {
        const title = this.createHeaderTitle(VideoPage.TextObject.MainTitle);
        const mainBox = this.createHTMLElement('div')
        this.container.append(title)
        this.container.insertAdjacentElement("beforeend", mainBox)
        return this.container;
    }
}
export default VideoPage;