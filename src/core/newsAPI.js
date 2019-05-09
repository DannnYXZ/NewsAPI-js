export default class NewsAPI {
  constructor() {
    this.key = 'ad019e5852754e32813188236a68f40c';
    this.baseURL = 'https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=' + this.key;
  }

  getArticles(params) {
    const req = new Request(this.baseURL);
    let json =
        fetch(req)
            .then(function(response) {
              json = response.json();
            });
    console.log(json);
  }
}
