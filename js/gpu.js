function upgradeGPU() {
  if (money >= costOfGPU) {
    gpu++;
    money -= costOfGPU;
    dps += (1 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function upgradeGPU5() {
  if (money >= costOfGPU * 5) {
    gpu += 5;
    money -= costOfGPU * 5;
    dps += (5 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function upgradeGPU25() {
  if (money >= costOfGPU * 25) {
    gpu += 25;
    money -= costOfGPU * 25;
    dps += (25 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function upgradeGPU50() {
  if (money >= costOfGPU * 50) {
    gpu += 50;
    money -= costOfGPU * 50;
    dps += (50 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function upgradeGPU100() {
  if (money >= costOfGPU * 100) {
    gpu += 100;
    money -= costOfGPU * 100;
    dps += (100 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}