import Component from '../main/header-templates';

const Buttons = [
  {
    id: 'main-page',
    text: 'Main Page'
  },
  {
    id: 'pictures-page',
    text: 'Pictures Page'
  },
  {
    id: 'video-page',
    text: 'Video Page'
    },
  {
    id: 'music-page',
    text: 'Music Page'
  },
  {
    id: 'todo-page',
    text: 'Todo Page'
  }
];

class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderPageButtons() {
    const pageButtons = document.createElement('nav');
    Buttons.forEach((button) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerText = button.text;
      pageButtons.append(buttonHTML);
    });
    this.container.append(pageButtons);
  }

  render() {
    this.renderPageButtons();
    return this.container;
  }
}

export default Header;