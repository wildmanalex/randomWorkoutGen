
var mainVm = new Vue({
    el: '#app',
    data: {
		chest: ['bench press','dip','incline', ],
		legs: ['Barbell Squat','lunge'],
		back: ['deadlift', 'row'],
		bicep: ['preacher curl', 'rope curl'],
		tricep: ['skullcrushers', 'rope pull down'],
		shoulder: ['standing overhead press', 'lat raise'],
		abs: ['v-ups', 'plank'],
		randomChest:'',
		randomLegs:'',
		randomBack:'',
		randomBicep:'',
		randomTricep:'',
		randomShoulder:'',
		randomAbs:'',
    },
	methods: {
		test: function (){
			 this.randomChest = this.chest[Math.floor(Math.random()*this.chest.length)]
			 this.randomLegs = this.legs[Math.floor(Math.random()*this.legs.length)]
			 this.randomBack = this.back[Math.floor(Math.random()*this.back.length)]
			 this.randomBicep = this.bicep[Math.floor(Math.random()*this.bicep.length)]
			 this.randomTricep = this.tricep[Math.floor(Math.random()*this.tricep.length)]
			 this.randomShoulder= this.shoulder[Math.floor(Math.random()*this.shoulder.length)]
			 this.randomAbs = this.abs[Math.floor(Math.random()*this.abs.length)]


			// var x = Math.floor(Math.random() * this.chest.length)
			// console.log(x)
			// for(var i = 0; i < this.chest.length; i++) {
			// 	if(x = i){
			// 		this.workout += this.chest[i]
			// 	}
			// }
		}
	},

})

//three day a week workout, with an exercise from chest, legs, back, bicep, tricep, shoulder, abs
