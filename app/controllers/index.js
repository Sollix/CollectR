import Ember from 'ember';

export default Ember.Controller.extend({
ajax: Ember.inject.service(),
actions: {

		submitRelease() {
			var artistText = this.get('artistText')
			var titleText = this.get('titleText')
			var labelText = this.get('labelText')
			var year = this.get('year')
			var formatText = this.get('formatText')
			var notes = this.get('notesText')
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
		},

		importCollection() {
      		this.get('ajax').request('https://api.discogs.com/users/sollix/collection/folders/0/releases?page=1&per_page=10').then((response) => { //arrow functions allow for "this not to change within a function"
      			debugger
      			for (var i = 0; i < response.releases.length - 1; i++) {
					var addRecord = this.store.createRecord('release', {
						artist: response.releases[i].basic_information.artists[0].name,
						title: response.releases[i].basic_information.title,
						label: response.releases[i].basic_information.labels[0].name,
						year: response.releases[i].basic_information.year,
						format: response.releases[i].basic_information.formats[0].name,
						thumb: response.releases[i].basic_information.thumb
					})
					addRecord.save()
				}
      		})
        }
    }
});
