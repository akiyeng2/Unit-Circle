function randint(min,max){
	return Math.round(Math.random()*(max-min)+min);
}
function shuffle(array){
	var currentIndex=array.length,
	temporaryValue,
	randomIndex;
	while(0!==currentIndex){
		randomIndex=Math.floor(Math.random()*currentIndex);
		currentIndex-=1;
		temporaryValue=array[currentIndex];
		array[currentIndex]=array[randomIndex];
		array[randomIndex]=temporaryValue;
	}
	return array;
}
function check(){
	var right=0;
	for(var i in qs){
		document.getElementById(i).disabled=true;
		if(document.getElementById(i).value==qs[i].answer){
			right++;
		}else{
			document.getElementById("ans"+i).style.display="inline";
			document.getElementById(i).style.border="1px solid red";
		}
		
		
	}
	alert("You got "+right+" right");
}

function write(question){
	
	qs=shuffle(question.splice(-10));
	length=qs.length;
	for(var i=0;i<length;i++){
		var toadd=("<li>"+qs[i].display+"= <input class='form-control' style='display:inline;width:6em;' type='text' id='"+i+"'></input><span style='display:none' id='ans"+i+"'> Nope, the correct answer is: "+qs[i].answerText+"</span></li>");
		document.getElementById("questions").innerHTML+=toadd;

	}
	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);

}

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second parm
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time = hours+':'+minutes+':'+seconds;
    return time;
};
function start(){
	count=parseInt(document.getElementById("seconds").value)+1;

	document.getElementById("questions").style.display="block";
	document.getElementById("settings").style.display="none";
	counter=setInterval(timer, 1000); //1000 will  run it every 1 second
	

}
function timer()
{
  count=count-1;
  if (count < 0)
  {
     clearInterval(counter);
     
    check();
     return;
  }
  document.getElementById("time").innerHTML="<h3>"+count.toString().toHHMMSS()+"</h3>"; // watch for spelling



  //Do code for showing the number of seconds here
}