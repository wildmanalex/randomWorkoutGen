
var mainVm = new Vue({
    el: '#app',
    data: {
		chest: ['Bench Press','Dumbbell Bench Press','Incline Bench Press','Pushups', 'Dumbell Flyes', 'Incline Dumbbell Bench Press','Dips','Machine-Press','Machine Incline' ],
		quad: ['Barbell Squat','Leg Press','Single-Leg Press','Barbell Lunge','Box Squat','Dumbell Lunges','Barbell Lunges', 'Goblet Squat','Front Squat'],
		back: ['Pull Ups', 'V-Bar Pulldown','Wide-Grip Pulldown','T-Bar Row','Dumbell Row','Reverse Grip Bent Over Row','Hyperextension','Deadlift','Cable Row'],
		bicep: ['Incline Hammer Curl', 'Barbell Curl', 'Spider Curl', 'Machine Curl', 'Ez Bar Curl', 'Preacher Curl', 'One Arm Preacher Curl'],
		tricep: ['Dips', 'Close Grip Bench','Reverse Grip Tricep Pushdown', 'Skull Crushers','Overhead extension with rope'],
		shoulder: ['One-Arm Linear Jammer', 'Side Lat to Front Raise', 'One-Arm Dumbell Press', 'Military Press','One-Arm Kettlebell Press',' Barbell Overhead Press'],
		abs: ['Landmine 180s', 'TRX fallout','Plank','Cable Lift','Hanging Leg Raise','Spider Crawl','Cocoons',],
		randomChest:'',
		randomQuad:'',
		randomBack:'',
		randomBicep:'',
		randomTricep:'',
		randomShoulder:'',
		randomAbs:'',
    },
	methods: {
		test: function (){
			 this.randomChest = this.chest[Math.floor(Math.random()*this.chest.length)]
			 this.randomQuad = this.quad[Math.floor(Math.random()*this.quad.length)]
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
