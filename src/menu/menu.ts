class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
    sayYes(userName: string) {
        let myName = this.sayHi();
        let say = `Hi:${userName},${myName}`;
        return say;
    }
}


export default Animal;