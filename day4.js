export default class Singleton {
    message() {
        return"hello singleton"
    }
}

let obj = new  Singleton();
console.log(obj.message());

console.log(Singleton.length)
