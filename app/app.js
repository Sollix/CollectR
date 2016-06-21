import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

// $('#import').on('click', function(){
// 	alert('This will import ALL your Discogs items. You sure you want that?')
// 	$.ajax({
// 		url: 'https://api.discogs.com/users/sollix/collection/folders/0/releases?page=1&per_page=10',
// 		method: 'GET',
// 		dataType: 'jsonp',
// 		success: function(response) {
// 			console.log(response)
// 		}
// 	})
// })