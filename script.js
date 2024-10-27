// let twodimensionalarray = [
//     ["rahim","karim","rakib","bablu"],
//     ["abul","kabir","rocky","hablu"],
//     ["tamim","nasir","santo","jpy"],
// ]

// console.log(twodimensionalarray[0][0]);
// console.log(twodimensionalarray[0][1]);
// console.log(twodimensionalarray[0][2]);
// console.log(twodimensionalarray[0][3]);

// console.log(twodimensionalarray[1][0]);
// console.log(twodimensionalarray[1][1]);
// console.log(twodimensionalarray[1][2]);
// console.log(twodimensionalarray[1][3]);

// console.log(twodimensionalarray[2][0]);
// console.log(twodimensionalarray[2][1]);
// console.log(twodimensionalarray[2][2]);
// console.log(twodimensionalarray[2][3]);

// for(i=0; i<=2; i++){
//     // console.log(i);
//     for(j=0; j<=3; j++){
//         // console.log(j);
//         console.log(twodimensionalarray[i][j]);
//     }
// }

let class8 = [
    [50,60,89,100],  
    [90,78,12,21],   
    [9,87,24,70],    
]

for(i=0; i<=2; i++){
    if(i == 0){
        console.log("section A: ");
    }
    else if(i == 1){
        console.log("section B: ");
    }
    else if(i == 2){
        console.log("section c: ");
    }


    for(j=0; j<=3; j++){
     if(class8[i][j] >= 80){
        console.log(class8[i][j]+"=a+");
     }
     else if(class8[i][j] >= 50){
        console.log(class8[i][j]+"=b+");
     }
     else if(class8[i][j] >= 33){
        console.log(class8[i][j]+"=pass");
     }
     else{
        console.log(class8[i][j]+"=fail");
     }
    }
}