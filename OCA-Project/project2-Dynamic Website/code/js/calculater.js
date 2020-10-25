

insrt= (num)=>{
    document.form.textView.value=document.form.textView.value+num
}



equal= ()=>{
    var x=document.form.textView.value;
    if(x){
        document.form.textView.value= eval(x)
    }
}


 clean= ()=>{
    document.form.textView.value="";
 }


back=()=>{
    var x=document.form.textView.value;

    document.form.textView.value=x.substring(0,x.length-1)
    
}





function factorial(x) 
{   
    if (x == 0)
      { return 1; }
    else
      { return x * factorial( x - 1 );


    }

}

function test(){
    var x =document.getElementById("textView").value;

   factorial(x)
   var t=factorial(x)
   document.form.textView.value=t;
}


  
absolute=()=>{
    var x=document.form.textView.value;
    
    document.form.textView.value=Math.abs(x);
}


    
 







 changecolor=()=>{
    var color=document.getElementById("color").value;
    document.body.style.backgroundColor=color;
}




var changeFontStyle =(font)=>{
    document.getElementById( 
        "calculator").style.fontFamily 
                = font.value; 
}


var onsize =(font)=>{
    document.getElementById( 
        "calculator").style.fontSize
                = font.value; 
    
}





 



































var bleep = new Audio();
bleep.src="audio/a.mp3";
function aa(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep.play(); // Play button sound now
    document.getElementById("imageo").src="img/a1.PNG"
    document.getElementById("ap").style.backgroundColor="red";


}





var bleep1 = new Audio();
bleep1.src="audio/b.mp3";
function bb(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep1.play();
    document.getElementById("imageo").src="img/b1.PNG"
    document.getElementById("ba").style.backgroundColor="#38E618";

    


}

var bleep2 = new Audio();
bleep2.src="audio/c.mp3";
function cc(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep2.play();
    document.getElementById("imageo").src="img/c1.PNG"
    document.getElementById("ca").style.backgroundColor="#E69B18";


}


var bleep3 = new Audio();
bleep3.src="audio/d.mp3";
function dd(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep3.play();
    document.getElementById("imageo").src="img/d1.PNG"
    document.getElementById("da").style.backgroundColor="#914E60";


}

var bleep4 = new Audio();
bleep4.src="audio/e.mp3";
function ee(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep4.play();
    document.getElementById("imageo").src="img/e1.PNG"
    document.getElementById("ea").style.backgroundColor="#D8DCD8";


}

var bleep5 = new Audio();
bleep5.src="audio/f.mp3";
function ff(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep5.play();   
    document.getElementById("imageo").src="img/f1.PNG"
    document.getElementById("fa").style.backgroundColor="#7FDC86";



}

var bleep6 = new Audio();
bleep6.src="audio/g.mp3";
function gg(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep6.play();
    document.getElementById("imageo").src="img/g1.PNG"
    document.getElementById("ga").style.backgroundColor="#D78CA1";



}

var bleep7 = new Audio();
bleep7.src="audio/h.mp3";
function hh(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep7.play();
    document.getElementById("imageo").src="img/h1.PNG"
    document.getElementById("ha").style.backgroundColor="#8897E8";


}


var bleep8 = new Audio();
bleep8.src="audio/i.mp3";
function ii(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep8.play();
    document.getElementById("imageo").src="img/x1.PNG"
    document.getElementById("imageo").src="img/i1.PNG"
    document.getElementById("ia").style.backgroundColor="#3F9898";



}



var bleep9 = new Audio();
bleep9.src="audio/j.mp3";
function jj(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep9.play();
    document.getElementById("imageo").src="img/j1.PNG"
    document.getElementById("ja").style.backgroundColor="#F319B6";



}


var bleep10 = new Audio();
bleep10.src="audio/k.mp3";
function kk(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep10.play();
    document.getElementById("imageo").src="img/k1.PNG"
    document.getElementById("ka").style.backgroundColor="#C2A5CD";


}

var bleep11 = new Audio();
bleep11.src="audio/l.mp3";
function ll(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep11.play();
    document.getElementById("imageo").src="img/l1.PNG"
    document.getElementById("la").style.backgroundColor="#13EA91";


}

var bleep12 = new Audio();
bleep12.src="audio/m.mp3";
function mm(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep12.play();
    document.getElementById("imageo").src="img/m1.PNG"
    document.getElementById("ma").style.backgroundColor="#3B90DA";



}


var bleep13 = new Audio();
bleep13.src="audio/n.mp3";
function nn(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep13.play();
    document.getElementById("imageo").src="img/n1.PNG"
    document.getElementById("na").style.backgroundColor="#E8E1B0";


}

 
var bleep14 = new Audio();
bleep14.src="audio/o.mp3";
function oo(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep14.play();
    document.getElementById("imageo").src="img/o1.PNG"
    document.getElementById("oa").style.backgroundColor="#F67C02";



}   

var bleep15 = new Audio();
bleep15.src="audio/p.mp3";
function pp(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep15.play();
    document.getElementById("imageo").src="img/p1.PNG"
    document.getElementById("pa").style.backgroundColor="#651F60";


}   

var bleep16 = new Audio();
bleep16.src="audio/q.mp3";
function qq(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep16.play();
    document.getElementById("imageo").src="img/q1.PNG"
    document.getElementById("qa").style.backgroundColor="#F20CE2";


}   

var bleep17 = new Audio();
bleep17.src="audio/r.mp3";
function rr(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep17.play();
    document.getElementById("imageo").src="img/r1.PNG"
    document.getElementById("ra").style.backgroundColor="#F86226";


}   
var bleep18 = new Audio();
bleep18.src="audio/s.mp3";
function ss(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep18.play();
    document.getElementById("imageo").src="img/s1.PNG"
    document.getElementById("sa").style.backgroundColor="#FCF801";



}   
var bleep19 = new Audio();
bleep19.src="audio/t.mp3";
function tt(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep19.play();
    document.getElementById("imageo").src="img/t1.PNG"
    document.getElementById("ta").style.backgroundColor="#EEC306";



}   
var bleep20 = new Audio();
bleep20.src="audio/u.mp3";
function uu(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep20.play();
    document.getElementById("imageo").src="img/u1.PNG"
    document.getElementById("ua").style.backgroundColor="#E69B18";



}   
var bleep21 = new Audio();
bleep21.src="audio/v.mp3";
function vv(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep21.play();
    document.getElementById("imageo").src="img/v1.PNG"
    document.getElementById("va").style.backgroundColor="#EAA764";



}   
var bleep22 = new Audio();
bleep22.src="audio/w.mp3";
function ww(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep22.play();
    document.getElementById("imageo").src="img/w1.PNG"
    document.getElementById("wa").style.backgroundColor="#9946BF ";



}   
var bleep23 = new Audio();
bleep23.src="audio/x.mp3";
function xx(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep23.play();
    document.getElementById("imageo").src="img/x1.PNG"
    document.getElementById("xa").style.backgroundColor="#605146";

}   
var bleep24 = new Audio();
bleep24.src="audio/yn.mp3";
function yy(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep24.play();
    document.getElementById("imageo").src="img/y1.PNG"
    document.getElementById("ya").style.backgroundColor="#F9E931";

}   
var bleep25 = new Audio();
bleep25.src="audio/z.mp3";
function zz(num){

    document.form.textView.value=document.form.textView.value+num;
    bleep25.play();
    document.getElementById("imageo").src="img/z1.PNG"
    document.getElementById("za").style.backgroundColor="#CACFD2";

}   

function clean(){
    document.form.textView.value="";
    document.getElementById("clea").style.backgroundColor="#282626";

}

