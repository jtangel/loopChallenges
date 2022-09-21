// loop challenges from README



// 1: print odds 1-20


for (i=1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log (i)
    }
}

console.log ("LINEBREAK")


// 2: Decreasing multiples of 3


for (i=100; i >= 0; i--) {
    if (i % 3 == 0) {
        console.log(i)
    }
}

console.log ("LINEBREAK")

// 3: Print the sequence

for (i=4; i >= -3.5; i -= 1.5) {
    console.log (i)
}

console.log ("LINEBREAK")

// 4: Sigma

var sum = 0
for (i=0; i <= 100; i++) {
    sum += i
}
console.log (sum)

console.log ("LINEBREAK")

// 5: Factorial

var prod = 1
for (i=1; i <= 12; i++) {
    prod *= i
}
console.log(prod)