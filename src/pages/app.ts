import Page from '../main/page-template'
import MainPage from './main';
import PicturesPage from './pictures';
import VideosPage from './videos';

class App {
    private container: HTMLElement;
    private initialPage:MainPage;
    
    static renderNewPage(idPage: string) {
        document.body.innerHTML = '';
        let page: Page | null = null;

        if (idPage === 'main-page') {
            page = new MainPage(idPage);
        } else if (idPage === 'pictures-page') {
            page === new PicturesPage(idPage);
        } else if (idPage === 'videos-page') {
            page === new VideosPage(idPage);
        }

        if (page) {
            const pageHTML = page.render();
            document.body.append(pageHTML);
        }
    }

    constructor() {
        this.container = document.body;
        this.initialPage = new MainPage('main-page');
    }
    run() {
        App.renderNewPage('main-page')
    }

}

export default App;
