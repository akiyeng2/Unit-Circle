var questions;	
function sign(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; }
function signstring(x){
	return x > 0 ? "" : x < 0 ? "-" : "";
}

function load(){
	questions=[];
	
	var numerator=-1;
	
	var denominator;
	function gcd(num1,num2){	
		for(var i=Math.min(num1,num2);i>=1;i--){
			if(num1%i==0 && num2%i==0){
				return i;
			}
		}
	}
	for(var i=0;i<=360;i+=30){
		
		denominator=6;
		var radians=i*(Math.PI/180);
		numerator++;
		var g=gcd(numerator,denominator);
		thenumerator=numerator/g;
		var name="";
		denominator/=g;
		if(thenumerator>1 && denominator>1){
			name="{ "+thenumerator+"\\pi \\over "+denominator+" }";
		}else if(thenumerator==1 && denominator==1){
			name="{ \\pi }";
		}
		else if(thenumerator==1){
			name="{ \\pi \\over"+denominator+" }";
	
		}else if(denominator==1){
			name="{ "+thenumerator+"\\pi }";
	
		}else{
			name="{ 0 }";	
		}
		if(Math.sin(radians)!==parseInt(Math.sin(radians))){
			
		}
		var sin=Math.sin(radians);
		var cos=Math.cos(radians);
		sinsquare=Math.round(sin*sin*1e10)/1e10;
		sinfrac=new Fraction(sinsquare);
		anumerator=sign(sin)*Math.sqrt(sinfrac.numerator);
		adenominator=Math.sqrt(sinfrac.denominator);
		sin=anumerator/adenominator;
		numans="";
		numeratorlatex="";
		if(anumerator%1!==0){
			numeratorlatex+="\\sqrt{"+Math.round(anumerator*anumerator)+"}";
			numans+=signstring(sin)+"("+Math.round(anumerator*anumerator)+")";
		}else{
			numeratorlatex+=Math.round(anumerator);
			numans+=Math.round(anumerator);
		}
		demans="";
		sinlatex="$ "+numeratorlatex;
		if(adenominator==1){
			sinlatex+=" $";
		}else{
			demans+="/"+adenominator;
			sinlatex+=" \\over "+adenominator+" $";
		}
		sinans=numans+demans;
		
		cossquare=Math.round(cos*cos*1e10)/1e10;
		cosfrac=new Fraction(cossquare);
		anumerator=sign(cos)*Math.sqrt(cosfrac.numerator);
		adenominator=Math.sqrt(cosfrac.denominator);
		cos=anumerator/adenominator;
		console.log(cos);	
		numeratorlatex="";
		numans="";
		demans="";
		if(anumerator%1!==0){
			numeratorlatex+="\\sqrt{"+Math.round(anumerator*anumerator)+"}";
			numans+=signstring(cos)+"("+Math.round(anumerator*anumerator)+")";
		}else{
			numeratorlatex+=Math.round(anumerator);
			numans+=Math.round(anumerator);
		}
		coslatex="$ "+numeratorlatex;
		if(adenominator==1){
			coslatex+=" $";
		}else{
			coslatex+=" \\over "+adenominator+" $";
			demans+="/"+adenominator;
		}
		cosans=numans+demans;
		tan=sin/cos;	
		numans="";
		demans="";
		if(tan!==Infinity){
			tansquare=Math.round(tan*tan*1e10)/1e10;
			tanfrac=new Fraction(tansquare);
			anumerator=sign(tan)*Math.sqrt(tanfrac.numerator);
			adenominator=Math.sqrt(tanfrac.denominator);
			tan=anumerator/adenominator;
			
			
			numeratorlatex="";
			if(anumerator%1!==0){
				numeratorlatex+="\\sqrt{"+Math.round(anumerator*anumerator)+"}";
				numans+=signstring(tan)+"("+Math.round(anumerator*anumerator)+")";
			}else{
				numeratorlatex+=Math.round(anumerator);
				numans+=Math.round(anumerator);
			}
			tanlatex="$ "+signstring(tan)+numeratorlatex;
			if(adenominator==1){
				tanlatex+=" $";
			}else{
				tanlatex+=" \\over "+adenominator+" $";
				demans+="/"+adenominator;
			}
			if(Math.abs(adenominator>2)){
				tanlatex="$" +signstring(tan)+" \\sqrt{3} \\over 3 $";
				numans="(3)";
				demans="/3";
			}
		}
		else{
			tanlatex="$ \\infty $";
		}
		tanans=numans+demans;
		questions.push({display:"$ sin("+name+")$",math:radians,type:"sin",answer:sinans,answerText:sinlatex,},{display:"$ cos("+name+")$",math:radians,type:"cos",answer:cosans,answerText:coslatex},{display:"$ tan("+name+")$",math:radians,type:"tan",answer:tanans,answerText:tanlatex});	
		
		
		
		
		
	}
	numerator=-1;
	function compare(a,b){
		if(a.math>b.math){
			return 1;
		}if(a.math<b.math){
			return -1;
		}else{
			return 0;
		}
	}
	
	for(var i=45;i<=360;i+=90){
		denominator=4;
		var radians=i*(Math.PI/180);
		numerator+=2;
		var g=gcd(numerator,denominator);
		thenumerator=numerator/g;
		var name="";
		denominator/=g;
		name=(thenumerator>1)?"{"+thenumerator+" \\pi \\over"+denominator+"}":"{ \\pi \\over"+denominator+"}";
		sin=Math.sqrt(2)/2*sign(Math.sin(radians));
		cos=Math.sqrt(2)/2*sign(Math.cos(radians));
		tan=sin/cos;
		var signsin=signstring(sin);
		var signcos=signstring(cos);
		sinlatex="$"+signsin+"\\sqrt{2} \\over 2 $";
		coslatex="$"+signcos+"\\sqrt{2} \\over 2 $";
		tanlatex="$ "+tan+" $";	
		sinans=signsin+"(2)/2";
		cosans=signcos+"(2)/2";
		tanans=tan;
		questions.push({display:"$ sin("+name+")$",math:radians,type:"sin",answer:sinans,answerText:sinlatex,},{display:"$ cos("+name+")$",math:radians,type:"cos",answer:cosans,answerText:coslatex},{display:"$ tan("+name+")$",math:radians,type:"tan",answer:tanans,answerText:tanlatex});	
	}
	questions.sort(compare);
	document.write(JSON.stringify(questions));	
//	write(questions);
};
