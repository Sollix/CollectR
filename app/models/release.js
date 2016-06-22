import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	artist: attr('string'),
	format: attr('string'),
	label: attr('string'),
	thumb: attr('string'),
	title: attr('string'),
	year: attr('string')
});
