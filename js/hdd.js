function upgradeHDD() {
  if (money >= costOfHDD) {
    hdd++;
    money -= costOfHDD;
    dps += (1 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function upgradeHDD5() {
  if (money >= costOfHDD * 5) {
    hdd += 5;
    money -= costOfHDD * 5;
    dps += (5 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function upgradeHDD25() {
  if (money >= costOfHDD * 25) {
    hdd += 25;
    money -= costOfHDD * 25;
    dps += (25 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function upgradeHDD50() {
  if (money >= costOfHDD * 50) {
    hdd += 50;
    money -= costOfHDD * 50;
    dps += (50 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function upgradeHDD100() {
  if (money >= costOfHDD * 100) {
    hdd += 100;
    money -= costOfHDD * 100;
    dps += (100 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}