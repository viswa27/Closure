function counter(){
    var counter = 0;

        function IncreaseCounter() {
            return counter += 1;
        };

    return IncreaseCounter;
}

var counterfun = counter();
var output = counterfun();
alert(counter());
document.getElementById("q11").innerHTML=output;
output = counterfun();
alert(counter());
document.getElementById("q12").innerHTML=output;
output = counterfun();
alert(counter());
document.getElementById("q13").innerHTML=output;
output = counterfun();
alert(counter());
document.getElementById("q14").innerHTML=output;

let count = 0;
    (function () {
      if (count === 0) {
        let count = 1;
        console.log(count);
        document.getElementById("q21").textContent = count;
      }
      console.log(count); 
      document.getElementById("q22").textContent = count;
    })
();

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
    console.log(i);
    document.getElementById('q31').innerText=i;
    console.log(i);
    document.getElementById('q32').innerText=i;
    console.log(i);
    document.getElementById('q33').innerText=i;
    }, 1000);
}

function counter() {
    var count = 0;
  
    function increaseCounter() {
      count++;
      console.log(count);
      return count;
    }
  
    return increaseCounter;
}
  
var counterFunc = counter();
document.getElementById('q51').innerHTML = counterFunc();
document.getElementById('q52').innerHTML = counterFunc();
document.getElementById('q53').innerHTML = counterFunc();
document.getElementById('q54').innerHTML = counterFunc();

var a = 12;
(function () {
  alert(a);
})();

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

var globalVar = "xyz";

(function outerFunc(outerArg) {
  var outerVar = 'a';

  (function innerFunc(innerArg) {
    var innerVar = 'b';

    console.log(
      "outerArg = " + outerArg + "\n" +
      "innerArg = " + innerArg + "\n" +
      "outerVar = " + outerVar + "\n" +
      "innerVar = " + innerVar + "\n" +
      "globalVar = " + globalVar
    );
    document.getElementById('q81').textContent = "outerArg = " + outerArg ;
    document.getElementById('q82').textContent = "innerArg = " + innerArg ;
    document.getElementById('q83').textContent = "outerVar = " + outerVar ;
    document.getElementById('q84').textContent = "innerVar = " + innerVar ;
    document.getElementById('q84').textContent = "globalVar = " + globalVar ;

  })(456);
})(123);