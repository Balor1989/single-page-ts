import Page from "../main/page-template";

class WeatherPage extends Page {
    static TextObject = {
        MainTitle: "Weather Page",
    };

    constructor(id: string) {
        super(id);
    }
    render() {
        const title = this.createHeaderTitle(WeatherPage.TextObject.MainTitle)
        this.container.append(title)
        return this.container;
    }
}
export default WeatherPage;