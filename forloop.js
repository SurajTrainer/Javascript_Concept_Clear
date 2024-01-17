// practice with for loop

for (let i = 0; i <= 10; i++) {
let element = i;
// console.log(element);    
}


for (let i = 0; i <= 10; i++) {
    let element = i;
    if (i === 5) {
        // console.log("mai aa rha hu");
    }
    // console.log(element);    
    }

    for (let i = 0; i <= 10; i++) {
        // console.log(`the outer for loop value is ${i}`);
        for (let j = 0; j <=10; j++) {
            // console.log(`the inner for loop j is ${j} and i is ${i}`);          
            // console.log(i + '*' + j + '=' + i*j);
        }
  }

// break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 7) {
        // console.log('7 is detacted');
        break;
    }
    // console.log(`the loop is ${i}`);
}

for (let i = 1; i <= 20; i++) {
    if (i == 7) {
        // console.log('7 is detacted');
        continue;
    }
    // console.log(`the loop is ${i}`);
}