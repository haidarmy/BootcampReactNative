console.log("----------- 1. Animal Class -----------")
// 1.Animal Class
// Release 0
console.log("----------- Release 0 -----------")
class Animal {
    constructor(name){
        this.name = name
        this.legs = 4
        this.cold_blooded = false
    }
}
var sheep = new Animal("shaun")
console.log(sheep.name)
console.log(sheep.legs)
console.log(sheep.cold_blooded)
// Release 1
console.log("\n----------- Release 1 -----------")

class Ape extends Animal {
    constructor(name){
       super(name)
       this.legs = 2
    }
    yell(){
        console.log("Auooo")
    }
}
class Frog extends Animal {
    constructor(name){
       super(name)
    }
    jump(){
        console.log("hop hop")
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell()

var kodok = new Frog("buduk")
kodok.jump()

console.log("\n----------- 2. Function to Class -----------")
// 2. Function to Class
  class Clock {
      constructor({template}){
          this.timer
          this.template = template
      }
      render(){
          var date = new Date()

          var hours = date.getHours()
          if(hours < 10) hours = '0' + hours

          var mins = date.getMinutes()
          if(mins < 10) mins = '0' + mins

          var secs = date.getSeconds()
          if(secs < 10) secs = '0' + secs

          var output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs)
    
          console.log(output)
       }

       stop() {
        clearInterval(this.timer)
      }
    
      start() {
        this.render()
        this.timer = setInterval(this.render, 1000);
      }

  }
  
  var clock = new Clock({template: 'h:m:s'});
  clock.start();  