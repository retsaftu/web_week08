
document.querySelector(".img1").setAttribute("src", "images/dice6.png");
document.querySelector(".img2").setAttribute("src", "images/dice6.png");


var randomNumber1;
var randomNumber2;

// while (true) {
//
// }
let timerId = setTimeout(function tick() {

  randomNumber1=Math.floor(Math.random() * Math.floor(5))+1;//random
  randomNumber2=Math.floor(Math.random() * Math.floor(5))+1;
  setTimeout(() => {

    document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");//random for 1
    setTimeout(() => {

      document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");//random fo 2
      setTimeout(() => {
        if (randomNumber1>randomNumber2) {
          // console.log(1);
          document.querySelector("h1").textContent="Player 1 Win🚩";//1>2

        } else if(randomNumber1<randomNumber2){
          // console.log(2);
          document.querySelector("h1").textContent="Player 2 Win🚩";//1<2
        } else {
          // console.log(3);
          document.querySelector("h1").textContent="draw😱";//1==2
        }
        setTimeout(() => {
          //new round
          document.querySelector("h1").textContent="New round😎";
          document.querySelector(".img1").setAttribute("src", "images/dice6.png");
          document.querySelector(".img2").setAttribute("src", "images/dice6.png");
        }, 2000);
      timerId = setTimeout(tick, 2000); // recursion
      }, 2000);
    }, 2000);
    }, 2000);
  }, 2000);


// setTimeout(() => {
//
//   document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");
// }, 4000);
