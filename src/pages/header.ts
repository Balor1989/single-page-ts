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
    id: 'videos-page',
    text: 'Videos Page'
  }
];

class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderPageButtons() {
    const pageButtons = document.createElement('div');
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