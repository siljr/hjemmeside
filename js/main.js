console.log("Hei");

// animation from front page to topnav
$(".circle:not('#home')").click(function (e) {
    e.preventDefault();                   // prevent default anchor behavior
    var goTo = this.getAttribute("href"); // store anchor href
    setTimeout(function(){
         window.location = goTo;
    },1500);
});

$(".circle:not('#home')").click(function() {
    $('.window').addClass('window-acitve');
});


// animation from topnav to front page
// $(".top-nav-circle#home").click(function (e) {
//     e.preventDefault();                   // prevent default anchor behavior
//     var goTo = this.getAttribute("href"); // store anchor href
//     setTimeout(function(){
//          window.location = goTo;
//     },1500);
// });

// $(".top-nav-circle#home").click(function() {
//     $('.window').addClass('window-active-down');
// });

// $(document).ready(function() {
//     $('.window').addClass('window-active-down');
// }));
