console.log("Hei");

$(".circle").click(function (e) {
    e.preventDefault();                   // prevent default anchor behavior
    var goTo = this.getAttribute("href"); // store anchor href
    setTimeout(function(){
         window.location = goTo;
    },1500);
});

$(".mainpage-links").click(function() {
    $('.window').addClass('window-acitve');
});
