console.log("Is running")

$('.button').on("click", function() {
    if ($(this).hasClass("navbarbutton1")) {
        $(".navbarbutton1").addClass(".active");
        $(".navbarbutton2").removeClass(".active");
        $(".navbarbutton3").removeClass(".active");
        $(".navbarbutton4").removeClass(".active");
        console.log("NavButton1 Worked")
    }

    else if ($(this).hasClass("navbarbutton2")) {
        $(".navbarbutton2").addClass(".active");
        $(".navbarbutton1").removeClass(".active");
        $(".navbarbutton3").removeClass(".active");
        $(".navbarbutton4").removeClass(".active");
    }

    else if ($(this).hasClass("navbarbutton3")) {
        $(".navbarbutton3").addClass(".active");
        $(".navbarbutton1").removeClass(".active");
        $(".navbarbutton2").removeClass(".active");
        $(".navbarbutton4").removeClass(".active");
    }

    else if ($(this).hasClass("navbarbutton4")) {
        $(".navbarbutton4").addClass(".active");
        $(".navbarbutton1").removeClass(".active");
        $(".navbarbutton2").removeClass(".active");
        $(".navbarbutton3").removeClass(".active");
    }
})

$(".contactButton").hover(function(){
    var div = $("button.contactButton");
    div.animate({width: '268px'}, "fast");
    div.animate({height: '70px'}, "fast");
    div.animate({fontSize: '30px'}, "fast");
    div.animate({width: '252px'}, "fast");
    div.animate({height: '58px'}, "fast");
    div.animate({fontSize: '24px'}, "fast");
    console.log(("Animation Worked"))
  });