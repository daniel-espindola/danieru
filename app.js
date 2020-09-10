let allFlowers = [];

const rngPos = (w, h, fw, fh) => {
  let safe = false;
  let x = 0;
  let y = 0;
  while (safe == false) {
    safe = true;
    x = Math.random() * (w - fw);
    x = Math.trunc(x);
    y = Math.random() * (h - fh);
    y = Math.trunc(y);

    for (const flower of allFlowers) {
      minDist = 20; //pra elas n nascerem grudadas
      if (
        flower.x < x + fw + minDist &&
        flower.x + fw + minDist > x &&
        flower.y < y + fh + minDist &&
        flower.y + fh + minDist > y
      ) {
        safe = false;
        break;
      }
    }
  }

  return {
    x,
    y,
  };
};

const randSign = () => {
  return Math.random() > 0.25 ? 1 : -1;
};

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

let fheight = 64;
let maxFlowers = ((vw / fheight) * (vh / fheight)) / 4;

for (let index = 0; index < Math.trunc(maxFlowers / 3); index++) {
  console.log(maxFlowers);
  let flower = document.createElement("img");
  flower.src = "lunar-tear.png";
  flower.alt = "lunar tear from the nier game series";
  flower.height = fheight;
  flower.style.transform = `scaleX(${randSign()}) rotate(${
    Math.random() * 20
  }deg)`;
  flower.style.animation = `6s ease ${-Math.random() * 2}s glow infinite`;

  let pos = rngPos(vw, vh, flower.height, flower.height);
  allFlowers.push(pos);
  flower.style.top = pos.y + "px";
  flower.style.left = pos.x + "px";

  document.body.appendChild(flower);
}