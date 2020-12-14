// Soal No.1 (array to Object)
var arr =  [["Abduh", "Muhamad", "male", 1992], ["Ahmad", "Taufik", "male", 1985]]
function arrayToObject(arr){
    let result = []
    for(var i = 0; i < arr.length; i++){
        var now = new Date()
        var thisYear = now.getFullYear()
        if(arr[i][3] == null || arr[i][3] > thisYear){
            age = "Invalid birth year"
        }
        else{
            age = thisYear - arr[i][3]
        }
        var obj = {
            firstName : arr[i][0],
            lastName : arr[i][1],
            gender : arr[i][2],
            age : age
        }
        var res = `${i+1}. ${obj.firstName} ${obj.lastName} : ${JSON.stringify(obj)}`
        result.push(res)
    }
    return result
}
console.log(arrayToObject(arr))

console.log("--------------------")

// Soal No.2 (Shopping Time)
function shoppingTime(memberId, money){
    if(memberId == null || memberId == ''){
        console.log("Mohon maaf, toko X hanya berlaku untuk member saja")
    }
    else if(money < 50000){
        console.log("Mohon maaf, uang tidak cukup")
    }
    else if(typeof(memberId) == 'string' && typeof(money) == 'number'){
        var stacattu = 1500000
        var zoro = 500000
        var hnm = 250000
        var uniqlo = 175000
        var case_hp = 50000 
        var barang = []

        if(money%stacattu !== money){
            barang.push("Sepatu Stacattu")
        }
        if((money%stacattu)%zoro !== money%stacattu){
            barang.push("Baju Zoro")
        }
        if(((money%stacattu)%zoro)%hnm !== (money%stacattu)%zoro){
            barang.push("Baju H&N")
        }
        if((((money%stacattu)%zoro)%hnm)%uniqlo !== ((money%stacattu)%zoro)%hnm){
            barang.push("Sweater Uniklooh")
        }
        if(((((money%stacattu)%zoro)%hnm)%uniqlo)%case_hp !== (((money%stacattu)%zoro)%hnm)%uniqlo){
            barang.push("Casing Handphone")
        }
        var sisa_uang = (((((money%stacattu)%zoro)%hnm)%uniqlo)%case_hp)
        var obj = {
            memberId : memberId,
            money : money,
            listPurchased : barang,
            changeMoney: sisa_uang
        }
        console.log(obj)
    }
}
shoppingTime("324193hDew2", 700000)

console.log("--------------------")

// Soal No.3 (Naik Angkot)
function naikAngkot(listPenumpang){
    rute = ['A', 'B', 'C', 'D', 'E', 'F']
    var result = []
    for(var i = 0; i < listPenumpang.length; i++){
       var obj = {
            penumpang: listPenumpang[i][0],
            naikDari: listPenumpang[i][1],
            tujuan: listPenumpang[i][2],
            bayar: 2000*Math.abs(rute.indexOf(listPenumpang[i][2]) - rute.indexOf(listPenumpang[i][1]))
        }
        result.push(obj)
    }return result
}
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));