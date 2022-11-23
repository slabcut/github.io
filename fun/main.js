/* jQuery and javascript */



$(".button").on("click", function(){

   var size = Math.random()*100;
   
   
   var words =["foo","yay","hmm"];
   
   var myword = words[Math.round(Math.random()*2)]
      
   $(".message p").html(myword);
   
   
   var red= Math.random()*255;
   var green= Math.random()*255;
   var blue= Math.random()*255;
   
   var bg="rgb("+red+","+green+","+blue+")";
   
   $(".message").css("background-color", bg );

   
   $(".message p").css("color","red");
    
   $(".message p").css("font-size", size +"px" );
   
   
});









