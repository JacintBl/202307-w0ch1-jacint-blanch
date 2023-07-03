const counterElement = document.querySelector(".counter");
const increaseElement = document.querySelector(".increase");
const decreaseElement = document.querySelector(".decrease");
const restartElement = document.querySelector(".restart");

let counter = 0;

counterElement.innerHTML = counter;

increaseElement.onclick = () => {
  if (counter < 10) {
    counter++;

    counterElement.innerHTML = counter;
  }
};

decreaseElement.onclick = () => {
  if (counter > 0) {
    counter--;
    counterElement.innerHTML = counter;
  }
};

restartElement.onclick = () => {
  if (counter > 0) {
    counter = 0;
    counterElement.innerHTML = counter;
  }
};
