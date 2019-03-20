$("button").click(function() {
   var name = $(".name").val();
   var age = $(".year").val();  
   var hobby=$(".thing").val();
   var math = 2050 - age;
   var sentence = name  + " In the year 2050 " +" you are going to be "+ math + " and you are going to be " + hobby;
   $(".results").text(sentence);
});