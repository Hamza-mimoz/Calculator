let Cbutton = document.getElementById("C")
Cbutton.addEventListener("click",function (){   
location.reload();
});
let total = 0;
let arr= [];

let buttons = document.querySelectorAll(".buttonss")
buttons.forEach( (button)=>{
button.addEventListener("click",function (e){
let  terget = e.target
let elemt=terget.id
arr.push(elemt);
//let  num = arrayToString(arr)  
let affi = arrayToString(arr)
document.getElementById("display").innerHTML= affi
console.log(affi)
});
});


let equal = document.getElementById("=");
equal.addEventListener("mousedown", function(){
   let str = /[+*-/]/;
   let  num = arrayToString(arr)
   let indexOperat =num.search(str)
   //console.log(indexOperat)
   let A = num.slice(0, (indexOperat));
   let B = num.slice((indexOperat+1) );
  
   let operator = num.at(indexOperat);
   let Avaleur= Number(A)
   let Bvaleur = Number(B)
   let result = calculate(Avaleur,operator,Bvaleur,total);
   if(Avaleur === 0 && operator === "/" || Avaleur === 0 && operator === "*"){
    total  =  result
    result = 0;
   arr =[];
    console.log(total)
   }else {
     
   
   total = total + result
   result = 0;
   arr =[];
   console.log(total)}
   document.getElementById("total").innerHTML= total

});


function arrayToString(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

function calculate(a, operator, b, total) {
    if(operator === "*"){
      if (a === 0 ){
        total = total*b
        return total;
      }else if ( b === 0){
        b === 1;
        return a * b;
      }
    else { return a * b ;}
    }else if(operator === "/" ){ 
      if(b===0){
        alert("error");
      }else if ( a===0){
          total=total / b
          return total
      }
      else{ return a/b ;}

    }else if (operator === "+"){  
      return a + b ;
    }else { return a - b} 
}

