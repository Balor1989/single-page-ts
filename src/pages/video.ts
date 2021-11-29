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
        this.container.append(title);
        return this.container;
    }
}
export default VideoPage;