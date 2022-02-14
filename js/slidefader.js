document.addEventListener("DOMContentLoaded", function() {
    var fadeComplete = function(e) { stage.appendChild(arr[0]); };
    var stage = document.getElementById("slider");
    var arr = stage.getElementsByTagName("a");
    for(var i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
     
    }

  }, false);