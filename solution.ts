
function formatValue(value: string | number | boolean){
    if(typeof value === 'string'){
        return value.toUpperCase();
    }
    if(typeof value === 'number'){
        return value*10;
    }
    if(typeof value === 'boolean'){
        return !value;
    }
}


function getLength(value: string |any[]){
    return value.length;
}


class Person{
    name:string;
    age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}

 

 type Filter = {
    title: string;
    rating: number;
 }
 function filterByRating(value:Filter[]):Filter[]{
     return value.filter(v =>v.rating>=4)
 }



 type user = {
    id:number;
    name:string;
    email:string;
    isActive:boolean;
 }

 function filterActiveUsers(user:user[]):user[]{
    return user.filter(u =>u.isActive)
 }


interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
}
function printBookDetails(obj:Book){
    console.log(`Title:${obj.title}, Author: ${obj.author}, Published Year: ${obj.publishedYear}, Available: ${obj.isAvailable?'Yes':'No'}`);
}



function getUniqueValues(num1:number[], num2:number[]):number[]{
    return Array.from(new Set([...num1,...num2]))
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));



type product = {
    name:string;
    price:number;
    quantity:number;
    discount?:number;
}
function calculateTotalPrice(product: product[]):number{
    return product.reduce((total, product)=>{
        const discount = product.discount? product.discount:0;
        return total+(product.price*product.quantity*(1-discount/100))
    },0)
}


