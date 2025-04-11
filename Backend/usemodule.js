function sum(num1,num2){
    return num1+num2;
}

const multiplication=(num1,num2)=>{
return num1*num2;
}
const obj={
    sum:sum,
    multiplication:multiplication
}
module.exports=obj;

// const result=sum(20,20);
// console.log("Result="+result)
// const result1=multiplication(10,10);
// console.log("Multiplication="+result1);

