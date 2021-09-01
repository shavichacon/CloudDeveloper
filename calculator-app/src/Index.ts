import Calculator from "./Calculator";


export default class Index{
    constructor(){}

    run(){
        console.log("Running...")
        let calculatorService = new Calculator();
        let a : number = 10;
        let b : number = 3;
        let r = calculatorService.sum(a,b);
        console.log(`La suma de ${a} y ${b} es ${r}`)
    }
}

new Index().run();