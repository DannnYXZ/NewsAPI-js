export default class View {
  constructor() {
    this.buttonLoad = document.querySelector('.load-more-btn');
    this.itemTemplate = document.getElementById('news-item-tpl');
    this.sourceTemplate = document.getElementById('source-item-tpl');
    this.newsContainer = document.querySelector('.news-container');
    this.searchEdit = document.querySelector('.search-edit');
    this.sourcesContainer = document.querySelector('.sources-container');
    this.noDataView = document.querySelector('.no-data');
    this.searchButton = document.querySelector('.search-btn');
  }

  createNewsItem(itemData) {
    const newsClone = this.itemTemplate.content.cloneNode(true);
    newsClone.querySelector('.news__meta-photo').style.backgroundImage = `url("${itemData.urlToImage || 'img/placeholder.jpg'}")`;
    newsClone.querySelector('.news__description-title').textContent = itemData.title;
    newsClone.querySelector('.news__description-source').textContent = itemData.source.name;
    newsClone.querySelector('.news__description-content').textContent = itemData.description;
    newsClone.querySelector('a').setAttribute('href', itemData.url);
    return newsClone;
  }

  createSourceItem(srcData) {
    const sourceClone = this.sourceTemplate.content.cloneNode(true).querySelector('.source__item');
    sourceClone.id = srcData.id;
    sourceClone.innerHTML = srcData.name;
    return sourceClone;
  }

  appendNewsItem(itemData) {
    this.hide(this.noDataView);
    this.newsContainer.appendChild(this.createNewsItem(itemData));
  }

  appendSourceItem(sourceData) {
    this.sourcesContainer.appendChild(this.createSourceItem(sourceData));
  }

  hide(elem) {
    elem.style.display = 'none';
  }

  show(elem) {
    elem.style.display = 'unset';
  }

  removeNews() {
    this.hide(this.buttonLoad);
    this.newsContainer.innerHTML = '';
  }

  showNoData() {
    this.removeNews();
    this.hide(this.buttonLoad);
    this.show(this.noDataView);
  }
}
