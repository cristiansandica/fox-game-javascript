const TICK_RATE = 3000;

function tick() {
  console.log("tick", Date.now());
}

async function init() {
  console.log("starting game");

  let nextTimeToTick = Date.now(); //track next time we gonna call tick()

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame); //
  }

  requestAnimationFrame(nextAnimationFrame);
}

init();
