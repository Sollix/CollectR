import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('release')
		// return this.get('ajax').request('/posts')
	}
});
