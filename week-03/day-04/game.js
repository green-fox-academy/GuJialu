// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

const candiesText = document.querySelector('.candies');
const lollipopText = document.querySelector('.lollypops');
const speedText = document.querySelector('.speed');
const createCandiesButton = document.querySelector('.create-candies');
const buyLollypopsButton = document.querySelector('.buy-lollypops');
const candyRainButton = document.querySelector('.candy-machine');

let candies = 0;
let lollipops = '';
let speed = 0;

function updateStatus() {
  candiesText.innerText = candies;
  lollipopText.innerText = lollipops;
  speedText.innerText = speed;
}

createCandiesButton.onclick = function () {
  candies++;
  updateStatus();
}

buyLollypopsButton.onclick = function () {
  if (candies >= 10) {
    lollipops = lollipops + '🍭';
    candies -= 10;
    speed++;
    updateStatus()
  }
}

candyRainButton.onclick = function () {
  speed *= 10;
  this.disabled = true;
}

setInterval(function () {
  candies += speed;
  updateStatus();
}, 1000);

