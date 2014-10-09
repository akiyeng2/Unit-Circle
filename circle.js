//var ctx=document.getElementsByTagName("canvas")[0].getContext("2d");
//ctx.beginPath();
//ctx.arc(375,375,325,0,Math.PI*2);
//ctx.closePath();
//ctx.stroke();
//for(var i=0;i<Math.PI*2;i+=Math.PI/6){
//	ctx.beginPath();
//	ctx.moveTo(375,375);
//	ctx.lineTo(375+Math.cos(i)*325,375+Math.sin(i)*325);
//	ctx.closePath();
//	ctx.stroke();
//}
//for(var i=Math.PI/4;i<Math.PI*2;i+=Math.PI/2){
//	ctx.beginPath();
//	ctx.moveTo(375,375);
//	ctx.lineTo(375+Math.cos(i)*325,375+Math.sin(i)*325);
//	ctx.closePath();
//	ctx.stroke();
//}
//var img=ctx.canvas.toDataURL("image/gif");
//window.open(img); 
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

	document.getElementById("quiz").style.display="block";
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
  document.getElementById("timer").innerHTML=count.toString().toHHMMSS(); // watch for spelling



  //Do code for showing the number of seconds here
}
var questions=[{"degrees":"0","radians":"0","cos":"1","sin":"0"},{"degrees":"30","radians":"pi/6","cos":"(3)/2","sin":"1/2"},{"degrees":"45","radians":"pi/4","cos":"(2)/2","sin":"(2)/2"},{"degrees":"60","radians":"pi/3","cos":"1/2","sin":"(3)/2"},{"degrees":"90","radians":"pi/2","cos":"0","sin":"1"},{"degrees":"120","radians":"2pi/3","cos":"-1/2","sin":"(3)/2"},{"degrees":"135","radians":"3pi/4","cos":"-(2)/2","sin":"(2)/2"},{"degrees":"150","radians":"5pi/6","cos":"-(3)/2","sin":"1/2"},{"degrees":"180","radians":"pi","cos":"-1","sin":"0"},{"degrees":"210","radians":"7pi/6","cos":"-(3)/2","sin":"-1/2"},{"degrees":"225","radians":"5pi/4","cos":"-(2)/2","sin":"-(2)/2"},{"degrees":"240","radians":"4pi/3","cos":"-1/2","sin":"-(3)/2"},{"degrees":"270","radians":"3pi/2","cos":"0","sin":"-1"},{"degrees":"300","radians":"5pi/3","cos":"1/2","sin":"-(3)/2"},{"degrees":"315","radians":"7pi/4","cos":"(2)/2","sin":"-(2)/2"},{"degrees":"330","radians":"11pi/6","cos":"(3)/2","sin":"-1/2"}];

function check(){
	clearInterval(counter);
	var inputs=document.getElementsByTagName("input");
	for(var i in inputs){
		inputs[i].disabled=true;
	}
	var right=0;
	for(var i in questions){
		q=questions[i];
		console.log(i);
		deg=inputs[4*i+1];
		rad=inputs[4*i+2];
		cos=inputs[4*i+3];
		sin=inputs[4*i+4];
		if(q["degrees"]==deg.value.split(' ').join("")){
			right++;
		}else{
			inputs[4*i+1].style.border="1px solid red";
		}
		if(q["radians"]==rad.value.split(' ').join("")){
			right++;
		}else{
			inputs[4*i+2].style.border="1px solid red";
			
		}if(q["cos"]==cos.value.split(' ').join("")){
			right++;
		}else{
			inputs[4*i+3].style.border="1px solid red";
			
		}
		if(q["sin"]==sin.value.split(' ').join("")){
			right++;
		}else{
			inputs[4*i+4].style.border="1px solid red";
			
		}
		
		
	}
	alert((Math.round((right/64)*100)/100)*100+"%");
	score=right*300+count;
	alert("You scored "+score);
}
