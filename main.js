for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 1; i < 11; i++) {
    console.log(i);
}

for (let i = 1; i < 11; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let s = 0;
for (let i = 1; i < 11; i++) {
    s += i;
    console.log(s);
}

let count = 0;
while (count < 3) {
    console.log("Count:", count);
    count++;
}

let number = 5;
while (number >= 0) {
    console.log(number);
    number -= 1;
}

let doValue = 0;
do {
    console.log("Value:", doValue);
    doValue++;
} while (doValue < 3);

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

for (let i = 1; i < 11; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
    if (i == 8) {
        break;
    }
}

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}

for (let i = 1; i <= 4; i++) {
    let c = "";
    for (let j = 1; j <= i; j++) {
        c+="*";
    }
    console.log(c);
}