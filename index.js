window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var date = document.getElementById('date');
    var bottom = document.getElementById('bottom');
    if(t > 0) {
        date.style.opacity = 0;
        bottom.style.opacity = 0;
    }else{
        date.style.opacity = 1;
        bottom.style.opacity = 1;
    }
    var interval = setInterval(function(){
        var t2 = document.documentElement.scrollTop || document.body.scrollTop;
        if(t2 == t) {
           bottom.style.opacity = 1;
           clearInterval(interval);
        }
    },100)
}