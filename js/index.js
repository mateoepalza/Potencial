document.addEventListener("DOMContentLoaded", function(){

  var rMayus = 0.5;
  var q = 0.000000005;
  var k = 9000000000;
  var res;
  document.getElementById("boton").addEventListener("click", function(){

    var rMinu = document.getElementById("radioMe").value;
    rMayus = document.getElementById("radioMa").value;
    q = document.getElementById("carga").value;
    q = q/1000000000;

    if(rMinu < rMayus){
      var res = (k*q)/rMayus;
      document.getElementById("image-container").innerHTML = "<img id='imgP' src='img/rMenor.png' >";
    }else{
      var res = (k*q)/rMinu;
      document.getElementById("image-container").innerHTML ="<img id='imgP' src='img/rMayor.png' >";
    }

    document.getElementById("resultado").innerHTML="El potencial eléctrico es de : "+res+" J";

  });

});
