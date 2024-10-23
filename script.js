
// ====forEach loop=====

// let marks = [55, 47, 78, 64, 93, 89, 100]

// marks.forEach((element)=>{
//     console.log(element);
// })

let marks = [66, 34, 68, 71, 31, 78, 85, 89, 92, 26, 95, 99, 55, 22, 78, 59]

marks.forEach((number)=>{

    if (number>= 80){
        console.log(number + "=A+");
    }
    
    else if (number>= 70){
        console.log(number + "=A");
    }
    
    else if (number>= 60){
        console.log(number + "=A-");
    }
    
    else if (number>= 50){
        console.log(number + "=B");
    }
    
    else if (number>= 40){
        console.log(number + "=C");
    }
    
    else if (number>= 33){
        console.log(number + "=D");
    }
    
    else{console.log(number + "=F");
    
    }   
})







// =====While loop=====

let numbers = [55, 47, 78, 64, 93, 89, 100]

let i = 0;

while(i<=6) {
    console.log(numbers[i]);
    i++;
}


let j = 1;

while(j<=10){
    console.log("Hellow World");
    console.log(j);
    j++;
   
}

// =====Do While loop=====

let l = 1;

do {
    console.log("Hellow World");
    console.log(l);
    l++;
   
}

while(l<=10); 

