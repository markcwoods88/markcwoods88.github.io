  // upgrading the item increases the cost of the item by *1.01. 
  
  function upgradehdd() {
    if (money >= costOfHDD) {
      hdd++;
      money -= costOfHDD;
      dps++;
      Math.round(costOfHDD *= 1.01);
    } else {
      console.log('You Broke!');
    }
  }

  function upgradehdd5() {
    for (i = 0; i < 5; i++)
      Math.round(costOfHDD *= 1.01);
      console.log(Math.round(costOfHDD));
      if (money >= Math.round(costOfHDD)) {
        hdd += 5;
        money -= Math.round(costOfHDD);
        dps += 5;
        console.log(Math.round(costOfHDD));
      } else {
        for (i = 0; i < 5; i++)
        costOfHDD /= 1.01;
        console.log(Math.round(costOfHDD));
      }
    }

    function upgradehdd25() {
      for (i = 0; i < 25; i++)
        Math.round(costOfHDD *= 1.01);
        console.log(Math.round(costOfHDD));
        if (money >= Math.round(costOfHDD)) {
          hdd += 25;
          money -= Math.round(costOfHDD);
          dps += 25;
          console.log(Math.round(costOfHDD));
        } else {
          for (i = 0; i < 25; i++)
          costOfHDD /= 1.01;
          console.log(Math.round(costOfHDD));
        }
      }

      function upgradehdd50() {
        for (i = 0; i < 50; i++)
          Math.round(costOfHDD *= 1.01);
          console.log(Math.round(costOfHDD));
          if (money >= Math.round(costOfHDD)) {
            hdd += 50;
            money -= Math.round(costOfHDD);
            dps += 50;
            console.log(Math.round(costOfHDD));
          } else {
            for (i = 0; i < 50; i++)
            costOfHDD /= 1.01;
            console.log(Math.round(costOfHDD));
          }
        }

        function upgradehdd100() {
          for (i = 0; i < 100; i++)
            Math.round(costOfHDD *= 1.01);
            console.log(Math.round(costOfHDD));
            if (money >= Math.round(costOfHDD)) {
              hdd += 100;
              money -= Math.round(costOfHDD);
              dps += 100;
              console.log(Math.round(costOfHDD));
            } else {
              for (i = 0; i < 100; i++)
              costOfHDD /= 1.01;
              console.log(Math.round(costOfHDD));
            }
          }