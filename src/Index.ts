import Calculator from "./tools/Calculator";

console.log("Hello from typescript");

class Index{
    run(){
        let a = 10;
        let b = 20;
        let r = Calculator.Sum(a,b)
        console.log(`La suma resultadnte de los operadores ${a} y ${b} es igual a ${r}`)
    }
}

new Index().run();