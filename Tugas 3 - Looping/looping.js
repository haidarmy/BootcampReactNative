// No. 1 Looping While
console.log("LOOPING PERTAMA")
var x = 2
while(x <= 20){
    console.log(`${x} - I love coding`)
    x += 2
}

console.log("LOOPING KEDUA")
var x = 20
while(x >= 2){
    console.log(`${x} - I love coding`)
    x -= 2
}

console.log("---------------------------")

// No. 2 Looping menggunakan for
for(var x = 1; x <= 20; x++){
    if(x%3 == 0 && x%2 !== 0){
        console.log(`${x} - I Love Coding`)
    }
    else if(x%2 !== 0){
        console.log(`${x} - Santai`)
    }
    else if(x%2 == 0){
        console.log(`${x} - Berkualitas`)
    }
}

console.log("---------------------------")

// No. 3 Membuat Persegi Panjang #
var x = ""
for(var i = 1; i <= 4; i++){
    for(var j = 1; j <= 8; j++){
       x += "#"
    }
    console.log(x)
    x = ""
}

console.log("---------------------------")

// No. 4 Membuat Tangga
var x = ""
for(var i = 1; i <= 7; i++){
    for(var j = 1; j <= i; j++){
       x += "#"
    }
    console.log(x)
    x = ""
}

console.log("---------------------------")

// No. 5 Membuat Papan Catur
for(var i = 1; i <= 8; i++){
    for(var j = 1; j <= 8; j++){
       if(i%2 !== 0){
            if(j%2 == 0){
                x += "#"
            }
            else{
                x += " "
            }
       }
       else{
            if(j%2 == 0){
                x += " "
            }
            else{
                x += "#"
            }
       }
    }
    console.log(x)
    x = ""
}