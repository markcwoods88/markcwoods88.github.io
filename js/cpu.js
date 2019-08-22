  // upgrading the item increases the cost of the item by *1.01. 
  
  function upgradeCPU() {
    if (money >= costOfCPU) {
      cpu++;
      money -= costOfCPU;
      dps++;
      Math.round(costOfCPU *= 1.01);
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeCPU5() {
    for (i = 0; i < 5; i++)
      Math.round(costOfCPU *= 1.01);
      console.log(Math.round(costOfCPU));
      if (money >= Math.round(costOfCPU)) {
        cpu += 5;
        money -= Math.round(costOfCPU);
        dps += 5;
        console.log(Math.round(costOfCPU));
      } else {
        for (i = 0; i < 5; i++)
        costOfCPU /= 1.01;
        console.log(Math.round(costOfCPU));
      }
    }

    function upgradeCPU25() {
      for (i = 0; i < 25; i++)
        Math.round(costOfCPU *= 1.01);
        console.log(Math.round(costOfCPU));
        if (money >= Math.round(costOfCPU)) {
          cpu += 25;
          money -= Math.round(costOfCPU);
          dps += 25;
          console.log(Math.round(costOfCPU));
        } else {
          for (i = 0; i < 25; i++)
          costOfCPU /= 1.01;
          console.log(Math.round(costOfCPU));
        }
      }

      function upgradeCPU50() {
        for (i = 0; i < 50; i++)
          Math.round(costOfCPU *= 1.01);
          console.log(Math.round(costOfCPU));
          if (money >= Math.round(costOfCPU)) {
            cpu += 50;
            money -= Math.round(costOfCPU);
            dps += 50;
            console.log(Math.round(costOfCPU));
          } else {
            for (i = 0; i < 50; i++)
            costOfCPU /= 1.01;
            console.log(Math.round(costOfCPU));
          }
        }

        function upgradeCPU100() {
          for (i = 0; i < 100; i++)
            Math.round(costOfCPU *= 1.01);
            console.log(Math.round(costOfCPU));
            if (money >= Math.round(costOfCPU)) {
              cpu += 100;
              money -= Math.round(costOfCPU);
              dps += 100;
              console.log(Math.round(costOfCPU));
            } else {
              for (i = 0; i < 100; i++)
              costOfCPU /= 1.01;
              console.log(Math.round(costOfCPU));
            }
          }