import NewsAPI from './newsAPI.js';

export default class Model {
  constructor() {
    this.newsAPI = new NewsAPI();
  }
}
