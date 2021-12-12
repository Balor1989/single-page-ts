abstract class Page {
    protected container: HTMLElement;
    static TextObject = {};

     constructor(id: string) {
        this.container = document.createElement('section');
        this.container.id = id;
        
    }

    protected createHeaderTitle(text: string) {
        const headerTitle = document.createElement("h1");
        headerTitle.classList.add('hero-title')
        headerTitle.innerText = text;
        return headerTitle;
    }
    protected createHTMLElement(text: string) {
        const mainBox = document.createElement('div');
        mainBox.classList.add('main-box')
        return mainBox;
    }
    render() {
        return this.container;
    }
}
export default Page;
