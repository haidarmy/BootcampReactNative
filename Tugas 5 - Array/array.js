// Soal No.1 (Range)
function range(startNum, finishNum)
{
    if(startNum == null || finishNum == null){
        return -1
    }
    else{
        var arr = []
        if(startNum < finishNum){
            for(var finishNum; startNum <= finishNum; startNum++){
                arr.push(startNum)
            }
            arr.sort(function (value1, value2) { return value1 - value2 })
        }
        else{
            for(var finishNum; startNum >= finishNum; startNum--){
                arr.push(startNum)
            }
            arr.sort(function (value1, value2) { return value2 - value1 } )
        }
        return arr
    }
}
console.log(range(54, 50))

console.log("---------------------")

// Soal No.2 (Range with Step)
function rangeWithStep(startNum, finishNum, step)
{
    if(startNum == null || finishNum == null){
        return -1
    }
    else{
        var arr = []
        if(startNum < finishNum){
            for(var finishNum; startNum <= finishNum; startNum += step){
                arr.push(startNum)
            }
            arr.sort(function (value1, value2) { return value1 - value2 })
        }
        else{
            for(var finishNum; startNum >= finishNum; startNum -= step){
                arr.push(startNum)
            }
            arr.sort(function (value1, value2) { return value2 - value1 } )
        }
        return arr
    }
}
console.log(rangeWithStep(29, 2, 4))

console.log("---------------------")

// Soal No.3 (Sum of Range)
function sum(startNum, finishNum, step)
{
    if(startNum == null){
        return 0
    }
    else if(finishNum == null){
        return startNum
    }
    else if(step == null){
        step = 1
    }
        var total = 0
        if(startNum < finishNum){
            for(var finishNum; startNum <= finishNum; startNum += step){
                total += startNum 
            }
        }
        else{
            for(var finishNum; startNum >= finishNum; startNum -= step){
                total += startNum 
            }
        }
        return total
}
console.log(sum(15, 10))

console.log("---------------------")

// Soal No.4 (Array Multidimensi)
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 

function dataHandling(input){
    for(var i = 0; i < 4; i++){
        console.log(`Nomor ID: ${input[i][0]} \nNama Lengkap: ${input[i][1]} \nTTL: ${input[i][2]} ${input[i][3]} \nHobi: ${input[i][4]}\n`)
    }
}
dataHandling(input)

console.log("---------------------")

// Soal No.5 (Balik Kata)
function balikKata(input){
    var newString = ''
    for(var i = input.length - 1; i >= 0; i--){
        newString += input[i]
    }
    return newString
}
console.log(balikKata("Kasur Rusak"))

console.log("---------------------")

// Soal No.6 (Metode Array)
input2 = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] 
function dataHandling2(input){
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    input.splice(input.length-1, 1, "Pria", "SMA Internasional Metro")
    console.log(input)
    tanggal = input[3].split("/")
    bulan = tanggal[1]
    switch(Number(bulan)){
        case 1: {console.log("Januari"); break}
        case 2: {console.log("Februai"); break}
        case 3: {console.log("Maret"); break}
        case 4: {console.log("April"); break}
        case 5: {console.log("Mei"); break}
        case 6: {console.log("Juni"); break}
        case 7: {console.log("Juli"); break}
        case 8: {console.log("Agustus"); break}
        case 9: {console.log("September"); break}
        case 10: {console.log("Oktober"); break}
        case 11: {console.log("November"); break}
        case 12: {console.log("Desember"); break}
    }
    joinedDate = tanggal.join("-")
    sortedDate = tanggal.sort((a,b) => b-a)
    console.log(sortedDate)
    console.log(joinedDate)
    slicedName = input[1].slice(0,14)
    console.log(slicedName)
    
}
dataHandling2(input2)