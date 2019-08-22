function upgradeCPU() {
    if (money >= 100) {
      cpu++;
      money -= 100;
      dps++;
    } else {
      console.log('You Broke!');
    }
  }
  
  function upgradeCPU5() {
    if (money >= 500) {
      cpu += 5;
      money -= 500;
      dps += 5;
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeCPU25() {
    if (money >= 2500) {
      cpu += 25;
      money -= 2500;
      dps += 25;
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeCPU50() {
    if (money >= 5000) {
      cpu += 50;
      money -= 5000;
      dps += 50;
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeCPU100() {
    if (money >= 10000) {
      cpu += 100;
      money -= 10000;
      dps +- 100;
    } else {
      console.log('You Broke!');
    }
  }