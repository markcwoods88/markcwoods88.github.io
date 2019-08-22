  // upgrading the item increases the cost of the item by *1.01. 
  
  function upgradeGPU() {
    if (money >= costOfGPU) {
      gpu++;
      money -= costOfGPU;
      dps++;
      Math.round(costOfGPU *= 1.01);
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeGPU5() {
    for (i = 0; i < 5; i++)
      Math.round(costOfGPU *= 1.01);
      console.log(Math.round(costOfGPU));
      if (money >= Math.round(costOfGPU)) {
        gpu += 5;
        money -= Math.round(costOfGPU);
        dps += 5;
        console.log(Math.round(costOfGPU));
      } else {
        for (i = 0; i < 5; i++)
        costOfGPU /= 1.01;
        console.log(Math.round(costOfGPU));
      }
    }

    function upgradeGPU25() {
      for (i = 0; i < 25; i++)
        Math.round(costOfGPU *= 1.01);
        console.log(Math.round(costOfGPU));
        if (money >= Math.round(costOfGPU)) {
          gpu += 25;
          money -= Math.round(costOfGPU);
          dps += 25;
          console.log(Math.round(costOfGPU));
        } else {
          for (i = 0; i < 25; i++)
          costOfGPU /= 1.01;
          console.log(Math.round(costOfGPU));
        }
      }

      function upgradeGPU50() {
        for (i = 0; i < 50; i++)
          Math.round(costOfGPU *= 1.01);
          console.log(Math.round(costOfGPU));
          if (money >= Math.round(costOfGPU)) {
            gpu += 50;
            money -= Math.round(costOfGPU);
            dps += 50;
            console.log(Math.round(costOfGPU));
          } else {
            for (i = 0; i < 50; i++)
            costOfGPU /= 1.01;
            console.log(Math.round(costOfGPU));
          }
        }

        function upgradeGPU100() {
          for (i = 0; i < 100; i++)
            Math.round(costOfGPU *= 1.01);
            console.log(Math.round(costOfGPU));
            if (money >= Math.round(costOfGPU)) {
              gpu += 100;
              money -= Math.round(costOfGPU);
              dps += 100;
              console.log(Math.round(costOfGPU));
            } else {
              for (i = 0; i < 100; i++)
              costOfGPU /= 1.01;
              console.log(Math.round(costOfGPU));
            }
          }