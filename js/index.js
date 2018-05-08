window.onload = function () {
    var layout = document.getElementsByTagName("main")[0];
    setRem();
    window.onresize = setRem;
    function setRem () {
        var ww = layout.offsetWidth;
        document.documentElement.style.fontSize = ww / 640 * 100 + "px";
    }
}
