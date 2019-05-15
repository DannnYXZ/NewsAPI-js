import Model from './model.js';
import View from './view.js';

const view = new View();
const model = new Model();

model.loadData(`sources?`, processSources);
view.sourcesContainer.addEventListener('click', (e) => {
  view.removeNews();
  model.lastShownPage = 0;
  model.loadData(`everything?sources=${e.target.id}`, processArticles);
});

view.searchButton.addEventListener('click', async () => {
  const req = view.searchEdit.value;
  const query = req.trim() ? `everything?q=${req}` : `top-headlines?country=us`;
  view.removeNews();
  model.lastShownPage = 0;
  model.loadData(query, processArticles);
});
view.searchButton.click();

view.buttonLoad.addEventListener('click', () => {
  model.loadData(null, processArticles);
});

function processArticles(json) {
  view.hide(view.buttonLoad);
  view.hide(view.noDataView);
  const articles = json['articles'];
  if (!articles || !articles.length) {
    view.showNoData();
  } else {
    console.log(articles);
    articles.forEach((article) => view.appendNewsItem(article));
    if (articles.length < 5 || model.lastShownPage === model.lastPage) {
      view.hide(view.buttonLoad);
    } else {
      view.show(view.buttonLoad);
    }
  }
}

function processSources(json) {
  json['sources'].forEach((data) => {
    view.appendSourceItem(data);
  });
}

view.searchEdit.addEventListener('keyup', function(e) {
  if (e.keyCode === 13) view.searchButton.click();
});
