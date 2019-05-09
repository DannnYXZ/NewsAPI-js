export default class Controller {
  constructor(view, model) {
    view.buttonShow.bind('click', () => {
      model.newsAPI.getArticles();
    });
  }
}
