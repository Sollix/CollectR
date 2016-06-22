import Ember from 'ember';

export default Ember.Controller.extend({
actions: {

	
		submitRelease() {
			var artistText = this.get('artistText')
			var titleText = this.get('titleText')
			var labelText = this.get('labelText')
			var year = this.get('year')
			var formatText = this.get('formatText')
			var thumbURL = this.get('thumbURL')

			var addRecord = this.store.createRecord('release', {
				artist: artistText,
				title: titleText,
				label: labelText,
				year: year,
				format: formatText,
				thumb: thumbURL
			})

			addRecord.save()

		},

		deleteRelease(release) {
			release.destroyRecord()
		}

	}
});
