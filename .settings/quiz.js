function randint(min,max){
	return Math.random()*(max-min)+min;
}
function shuffle(array){
	for(var i=0;i<array.length;i++){
		var newLocation=randint(0,array.length);
		var temp=array[newLocation];
		array[newLocation]=array[i];
		array[i]=temp;
	}
	return array;
}
alert(shuffle([0,1,2,3,4,5,6]));
//var asking[];a
length=questions.length-1;
for(var i=0;i<length;i++){
	
}