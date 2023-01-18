(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });
  equal.addEventListener('click',function(e){
    if(screen.value===""){
        screen.value="Please enter";
    }else{
      let intData=(screen.value)
      
        let answer=eval(screen.value);
        screen.value="",
        screen.value=answer;
        console.log(answer);
    }
  })
  clear.addEventListener('click',function(e){
    screen.value="";
  })
})();
// var input=4*7;
// console.log(eval(input));
// console.log(+false);
