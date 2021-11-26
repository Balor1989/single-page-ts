import MainPage from './main';
import PicturesPage from './pictures';
import VideosPage from './videos';

class App {
    private container: HTMLElement;
    private initialPage: MainPage;
    private secondPage: PicturesPage;
    private endPage: VideosPage;
    
    constructor() {
        this.container = document.body;
        this.initialPage = new MainPage('main-page');
        this.secondPage = new PicturesPage('pictures-page');
        this.endPage = new VideosPage('videos-page')
    }
    run() {
        const mainPageHTML = this.initialPage.render();
        const secondPageHTML = this.secondPage.render();
        const endPageHTML = this.endPage.render();
        
        this.container.append(mainPageHTML, secondPageHTML, endPageHTML);
    }

}

export default App;