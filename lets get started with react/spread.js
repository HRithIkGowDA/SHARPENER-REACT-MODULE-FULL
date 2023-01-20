// use of spread operator

const num =[1,2,3];
const newnum = [...num , 4 ,5];
//console.log(newnum)

const person ={
    firstname : "Hrithik",
    lastname : "Gowda"
}

const newPerson = {
    ...person ,
    age : 23
}


//console.log(newPerson)



// use of rest opeartor

const filter = (...args) =>{
    return  args.filter(el=>el===1)
}

//console.log(filter(1,2,3))




//destructuring 

const number1 = [1,2,3];
[num1 , num2 , num3] = number1
//console.log(num1 , num2 , num3)

const{firstName , lastName} = {
    firstName : "Hrithik",
    lastName : "Gowda"
}
