/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/


window.onload = () => {
$("#button").hide();
var score = 0;
    var time_ = 5000;
    var num_2 = document.getElementById("num").value;
    num_2 ="0";
    document.getElementById("num").innerHTML = num_2;
    document.getElementById("button").addEventListener("click",number)
    document.getElementById("button2").addEventListener("click",hidenum)

 document.getElementById("ans").disabled = true;  
 document.getElementById("btn").addEventListener("click",restart)
 function restart(){
 $("#button2").fadeIn();
 $("#button").hide();
     num_2 = "0";
     score = 0;
     $("#score").html("Score : 0")
     document.getElementById("num").innerHTML  = "0";
     document.getElementById("body").style.display = "flex";
     document.getElementById("card").style.display = "none";
     
 }
    function number(){
    document.getElementById("num").style.color="#fff";
    num1 = document.getElementById("ans").value;
    if(num1 == num_2){
        update();
    }
    else{
        lose();
    }
    document.getElementById("ans").disabled = true;
    }
    function update(){
        num_2 = num_2+Math.floor(Math.random()*9)
        document.getElementById("num").innerHTML = num_2; 
        document.getElementById("ans").value = "";
    score+= 10;
    document.getElementById("score").innerHTML = "Score : "+score;
    $("#button").hide();
    $("#button2").fadeIn();
   }  
   function hidenum() {
   $("#button").fadeIn();
   $("#button2").hide();
   document.getElementById("num").style.color="#252525";
   document.getElementById("ans").disabled = false;
   document.getElementById("ans").focus();
   }
   function lose(){
       document.getElementById("sco").innerHTML = "Score :" + score;
       document.getElementById("body").style.display = "none";
       document.getElementById("card").style.display = "flex";
       document.getElementById("ans").value ="";
       if(score == 0){
           $("#iq").html("IQ : two mins of silence")
       }else if(score <= 30 && score >0){
           $("#iq").html("IQ : Bad")
       }else if(score >=40 && score <=60){
           $("#iq").html("IQ : Average")
           
       }else if(score >= 70 && score <= 100){
           $("#iq").html("IQ : Good")
       }
       else{
           $("#iq").html("IQ: Excellent")
       }
       
   }
}

/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/