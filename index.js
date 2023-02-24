console.log("Is running")

$(document).ready(function(){
  $(".contactButton").hover(function(){
    $(this).css("background-color", "#013863");
    $(this).css("font-size", "32px");
    }, function(){
    $(this).css("background-color", "#007b84");
    $(this).css("font-size", "24px");
  });
});

$(document).ready(function(){
  $(".menuitem").hover(function(){
    $(this).css("font-size", "20px");
    }, function(){
    $(this).css("font-size", "16px");
  });
});

