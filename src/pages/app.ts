import Page from '../main/page-template'
import MainPage from './main';
import PicturesPage from './pictures';
import VideosPage from './videos';

class App {
 
    static renderNewPage(idPage: string) {
        document.body.innerHTML = '';
        let page: Page | null = null;

        if (idPage === 'main-page') {
            page = new MainPage(idPage)
        }
        if (idPage === 'pictures-page') {
            page = new PicturesPage(idPage)
        }
        if (idPage === 'videos-page') {
            page = new VideosPage(idPage)
        }
        
        if (page) {
            const pageHTML = page.render();
            document.body.append(pageHTML);
        }
    }
    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash)
        });
    }
    constructor() { }
    
    run() {
        App.renderNewPage('videos-page')
        this.enableRouteChange();
    }

}

export default App;
