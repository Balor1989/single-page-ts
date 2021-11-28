import Page from '../main/page-template';
import MainPage from './main';
import PicturesPage from './pictures';
import VideosPage from './videos';
import Header from './header';
import ErrorPage from './error';

const enum PageNames {
    MainPage = 'main-page',
    PicturesPage = 'pictures-page',
    VideosPage = 'videos-page'
};

class App {

    private static container: HTMLElement = document.body;
    private header: Header;
    private static defaultPageID: string = 'current-page';
 
    static renderNewPage(idPage: string) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageID}`)
        if (currentPageHTML) {
            currentPageHTML.remove();
        }
        let page: Page | null = null;


        switch (idPage) {
            case PageNames.MainPage:
                page = new MainPage(idPage)
                break
            case PageNames.PicturesPage:
                page = new PicturesPage(idPage)
                break
            case PageNames.VideosPage:
                page = new VideosPage(idPage)
                break
            default:
                page = new ErrorPage(idPage, '404');
        }
        
        if (page) {
            const pageHTML = page.render();
            pageHTML.id = this.defaultPageID;
            this.container.append(pageHTML);
        };
        
    }
    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash)
        });
    }
    constructor() {
        this.header = new Header('header', 'header')
        
        
    }
    
    run() {
        App.container.append(this.header.render())
        this.enableRouteChange();
        App.renderNewPage(PageNames.MainPage) 
    }

}

export default App;

