var myPara = document.getElementById("content").getElementsByTagName("p")[5];
var myPara2 = $("content p:last-child");

myPara2.addClass("test");
myPara2.removeClass("test");
myPara2.fadeOut();
myPara2.fadeIn();

myPara2.css({position: relativel; color: "red"});

myPara.animate({left: "50px"});
