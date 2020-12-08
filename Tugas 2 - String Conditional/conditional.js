// var nama = "Junaedi"
// var peran = ""

// if(nama !== ''){
//     if(peran.toLocaleLowerCase() == "penyihir"){
//         console.log(`Selamat datang di Dunia Werewolf, ${nama}`)
//         console.log(`Halo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf`)
//     }
//     else if(peran.toLocaleLowerCase() == "guard"){
//         console.log(`Selamat datang di Dunia Werewolf, ${nama}`)
//         console.log(`Halo Guard ${nama}, kamu dapat melindungi temanmu dari serangan werewolf`)
//     }
//     else if(peran.toLocaleLowerCase() == "werewolf"){
//         console.log(`Selamat datang di Dunia Werewolf, ${nama}`)
//         console.log(`Halo Werewolf ${nama}, kamu akan memakan mangsa setiap malam`)
//     }
//     else{
//         console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
//     }
// }
// else{
//     console.log("Nama harus diisi!")
// }

var hari = 21;
var bulan = 1;
var tahun = 1945;
if(hari <= 31 && hari >= 1 && bulan <= 12 && bulan >= 1 && tahun <= 2200 && tahun >= 1900){   
    switch(bulan){
        case 1:{bulan = "Januari";break;}
        case 2:{bulan = "Februari";break;}
        case 3:{bulan = "Maret";break;}
        case 4:{bulan = "April";break;}
        case 5:{bulan = "Mei";break;}
        case 6:{bulan = "Juni";break;}
        case 7:{bulan = "Juli";break;}
        case 8:{bulan = "Agustus";break;}
        case 9:{bulan = "September";break;}
        case 10:{bulan = "Oktober";break;}
        case 11:{bulan = "November";break;}
        case 12:{bulan = "Desember";break;}
    }
    console.log(`${hari} ${bulan} ${tahun}`)
}