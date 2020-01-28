const doors100 = () => {
    let doors = [];

    for(let i=0;i < 100; i++ ){
        doors[i] = false
    }

    for(let i=1;i<=100;i++) {
        for(let j=i-1;j<100;j+=i) {
            doors[j] = !doors[j]
        }
    }

    for(let i=1;i<=100;i++) {
        console.log(`doors ${i} ${doors[i-1]?'open':'closed'}`)
    }
}


const doors100_2 = () => {
    for (let door = 1; door <= 100; door++) {
        let sqrt = Math.sqrt(door);
        if (sqrt === (sqrt | 0)) {
          console.log("Door %d is open", door);
        }
      }
}


const doors100_3 = () => {
Array.apply(null, { length: 100 })
  .map((v, i) => i + 1)
    .forEach(door => { 
      var sqrt = Math.sqrt(door); 
    //   console.log(sqrt, (sqrt | 0))
      if (sqrt === Math.floor(sqrt)) {
        console.log(`Door ${door} is open`);
      } 
    }); 
}

doors100_3();
