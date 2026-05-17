(function(w, d) {
    var domDiv = d.createElement("div");
    domDiv.style.cssText = "position: fixed; top: 0; left: 0; width: 0; height: 3px;" +
        "box-shadow: 0 0 5px #999; background: -webkit-linear-gradient(left, red, orange, yellow, green, blue, indigo, violet);" +
        "background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);" +
        "z-index: 999999; transition: width .3s linear;";
    d.body.appendChild(domDiv);
    
    var domH = w.innerHeight || d.documentElement.clientHeight || d.body.clientHeight;
    
    w.addEventListener("scroll", function() {
        var scrollPercent = window.pageYOffset / (d.body.offsetHeight - domH) * 100;
        domDiv.style.width = Math.round(scrollPercent) + "%";
    }, false);
})(window, document);