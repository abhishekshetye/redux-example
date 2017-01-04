

function addPromise(a,b){
	
	return new Promise(function(resolve, reject){
		if(typeof a == 'number' && typeof b == 'number')
			resolve(a+b);
		else
			reject('no');
	});
}





addPromise(6,false).then(function(num){
	console.log(" change ans is " + num);
}, function(val){
	console.log(val);
});


var names = ['a', 'b', 'c'];

var returnMe = (name) => name + '!';

console.log(returnMe('Abhishek'));

names.forEach(function (name){
	console.log('foreach', name);
});

names.forEach((name)=> {
	console.log(name);
});

var person = {
	name: 'Andrew',
	greet: function(){
		names.forEach((name) => { console.log(this.name + ' says hi to ' + name) } );
	}
};

person.greet();
