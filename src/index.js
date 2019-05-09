import Model from './core/model.js';
import Controller from './core/controller.js';
import View from './core/view.js';

alert('KEK');
const view = new View();
const model = new Model();
// const controller = new Controller(view, model);
// controller.valueOf();

const url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=ad019e5852754e32813188236a68f40c';
const req = new Request(url);
fetch(req)
    .then(function(response) {
      console.log(response.json());
    });
