$(function(){
 if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}
window.console = window.console || function(t) {};
});