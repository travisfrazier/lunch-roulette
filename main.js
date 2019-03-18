new Vue({
	el: '#app',
	data: {
		names: [
			'David Alvarez',
			'Travis Frazier',
			'Michael Sims',
			'Lindsey Frank',
			'Brandon Stables',
			'Lindsey Romanelli',
			'James Lawrence',
			'Melissa Lopez',
			'JJ Bannasch',
			'Chris Dyer',
			'Caitlin Byrne',
			'Brian Voorst',
			'Danica Oliver',
			'Alex Pierson',
			'Laura Wusthoff',
			'Connor Gold',
			'Cem Kuscu',
			'Edgar Martinez',
			'Ian Phillips',
			'Anna Fleming',
			'Taylor Smith'
		],
		personOne: '',
		personTwo: '',
		personThree: '',
		personFour: ''
	},
	methods: {
		generateNames: function() {
			const newNames = [];
			for (let i = 0; i < 4; i++) {
				newNames.push(
					this.names.splice(Math.floor(Math.random() * this.names.length), 1)[0]
				);
			}
			console.log(newNames);
			this.personOne = newNames[0];
			this.personTwo = newNames[1];
			this.personThree = newNames[2];
			this.personFour = newNames[3];
		}
	}
});
