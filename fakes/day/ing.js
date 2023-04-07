function screen_check(){
    if ($(window).width() >= 600) {
        var cssLi = document.getElementById("uuub");
        var isty = document.getElementById("ing0");
        isty.width = 320;
        cssLi.style = "height: 10rem; margin-bottom: 3.5rem; width: 24rem;";
    } else {
        var cssLi = document.getElementById("uuub");
        var isty = document.getElementById("ing0");
        isty.width = 300;
        cssLi.style = "height: 7.5rem; margin-bottom: 1.5rem; width: 18.5rem;";
    };
}

screen_check();
$(window).on('resize', function(){
    screen_check();
});