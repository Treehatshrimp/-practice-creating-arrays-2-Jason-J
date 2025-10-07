let bigArray = Array(7).fill("Hello"); // Task 1, fill with Hellos
console.log(bigArray);

bigArray.fill("Surprise",3,5); //Task 2, change indexes 3 and 4 in Surprise
console.log(bigArray);

let newArray = Array(5);
for(let i = 0;i<newArray.length;i++){
    newArray[i] = i * 10;
}
console.log(newArray);



