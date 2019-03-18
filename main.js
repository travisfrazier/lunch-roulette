new Vue({
	el: '#app',
	data: {
		names: [
			'Lindsay Romanelli',
			'Laura Wusthoff',
			'Brandon Stables',
			'Alex Pierson',
			'Edgar Martinez',
			'Cem Kuscu',
			'Caitlin Byrne',
			'Chris Dyer',
			'JJ Bannasch',
			'David Alvarez',
			'Michael Sims',
			'Connor Gold',
			'Brian van Voorst',
			'Melissa Lopez',
			'Travis Frazier',
			'Ian Phillips',
			'Danica Oliver',
			'Faith Lewis',
			'Ashley Fejtek',
			'Grace Benguerel',
			'Sylvia Ma',
			'Leanne Pratt',
			'Taylor Smith',
			'John Lostaglio',
			'Jacob Ory',
			'Melissa Hubbard',
			'Camille Vazquez',
			'Adam Jung',
			'David Williams',
			'Patrick Hayes',
			'Justin Kevalaitis',
			'Anna Fleming',
			'Lindsey Frank',
			'James Lawrence'
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
