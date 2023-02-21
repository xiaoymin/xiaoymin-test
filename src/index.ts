import Animal from './menu/menu'


let a = new Animal('张飞');

export const Greeter = (name: string) => `Hello ${name}`;


export const SayHello = (name: string) => a.sayYes(name);



