console.log("Hei");

$(".circle").click(function (e) {
    e.preventDefault();                   // prevent default anchor behavior
    var goTo = this.getAttribute("href"); // store anchor href
    setTimeout(function(){
         window.location = goTo;
    },2000);
});
