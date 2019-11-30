/** sticky navigation*/

let navbar=$(".navbar");

$(window).scroll(function(){
    let oTop=$(".section-2").offset().top -window.innerHeight;
    console.log(oTop);
});

