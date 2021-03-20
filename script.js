
let display = document.getElementById("display"); // selects id display and gives it an variebel name display.
display.type='text'

//const value1 = [];
let firstNum;
let secondNum;
let opName;
let value1= [];
let maxNumLength =25;


    document.querySelectorAll(".key").forEach(function(el) {
      el.onclick = function() {
        console.log(this.id)
        elementId= el.id;

        if(!isNaN(Number.parseInt(elementId))){ // is not not. 
          if(display.value.length >= maxNumLength){
            alert('Too many numbers, my brain hurts')
          }
          else{
            display.value = display.value !== '0' ? display.value + el.id : el.id ;
          }
          
          font();
        }


        else if(elementId==='clear') {
          display.value=0;
          display.style.fontSize = "28px";
        }

        else if(elementId==='percent') {
          display.value *= 0.01;
        }

        else if(elementId==='negate'){
          display.value *= -1;
        }
        
        else if (elementId==='dot'){
          if(!display.value.includes('.')){
            display.value +='.';
          }
          
        }
          
      
        else{
        operators();
        }


      }
    })
    
    function operators(){
      if (elementId==='add' || elementId==='subtract' || elementId==='multiply' || elementId==='divide' ){
           
        firstNum =display.value;

        if(value1 && value1.length){
          value1.push({ value: firstNum });

          const result = evaluate(value1);
  
          value1.push({ value: result });
          value1.push({ value: elementId });
  
          display.value = "";

        }

        else {
          value1.push({ value: firstNum });
          value1.push({ value: elementId });
          display.value = "";
        }

      
      }

      if(elementId ==='equal'){
        if (value1 && value1.length) {
          value1.push({ value: parseFloat(display.value) });
          display.value = evaluate(value1);
        }}

    }

      const evaluate = value1 => {
        const secondOperand = value1.pop().value;
        const operator = value1.pop().value;
        const firstOperand = value1.pop().value;
      
        switch (operator) {
          case "add":
            return parseFloat(firstOperand) + parseFloat(secondOperand);
          
            case "subtract":
            return firstOperand - secondOperand;
          
            case "multiply":
            return firstOperand * secondOperand;
          
            case "divide":
            return firstOperand / secondOperand;
          
            default:
            return secondOperand;
        }
      }





      function font() {
        for (let index = 0; index < display.value.length; index++) {
          if(display.value.length === 14) {
            display.style.fontSize = "24px"
          }
          else if (display.value.length === 18) {
            display.style.fontSize = "20px"
          }
          else if (display.value.length === 22) {
            display.style.fontSize = "16px"
          }
        }
      }


       /*
let num = document.querySelectorAll(".key");
 document.querySelectorAll(".key").forEach(   // selects everything with class name key. Which are num and op and loops through them.
    el => { // arrow finction. Creats an onclick eventlistner and simplified if else staitment. 
     el.onclick = () => display.value = display.value !== "0" ? display.value + el.id : el.id ;
     // el.onclick = btnHandler(el.id)

    });
*/ 
      
/*
console.log(secondNum)
        display.value ='';
         opName = elementId;
      else if (elementId==='equal'){
        secondNum=display.value;
        switch(opName){
          case 'add':
           firstNum*= 1;
           secondNum*= 1;
           firstNum+=secondNum;
            break
          
          case 'subtract':
              firstNum-=secondNum;
              break
            
          case 'multiply':
              firstNum= firstNum*secondNum;
              break
          
          case 'divide':
             firstNum= firstNum/secondNum;
              break

          default:
              return
        }
        
        display.value=firstNum;

      }
      */
   
    
  

  












/* let display = document.getElementById("display")
      let value1= [];

      
      document.body.onclick = function(anEvent) {
        
        let b = anEvent.target.id;
        display.type='text'
        
        if(b===''){
          return;
        }


        if (display.value ==='0') {
          if(b !='clear'){
            display.value = b;
          }

          
          else{
            clear();
          }
          }

          else if(b==='clear') {
              clear();
          }

          else if(b==='percent') {
            percent();
          }

          else if(b==='negate'){
            negate();
          }
          
          else if (b==='dot'){
            if(!display.value.includes('.')){
              dot();
            }
            
          }
            
          

         else if (b==='add' || b==='subtract' || b==='multiply' || b==='divide'){
            
            value1[0]=display.value;
            console.log(value1)
            display.value ='';
            value1[2] = b;
          }

          else if (b==='equal'){
            value1[1]=display.value;
            switch(value1[2]){
              case 'add':
                value1[0]*=1;
                value1[1]*=1;
                value1[0]+=value1[1];
                break
              
              case 'subtract':
                  value1[0]-=value1[1];
                  break
                
              case 'multiply':
                  value1[0]= value1[0]*value1[1];
                  break
              
              case 'divide':
                  value1[0]= value1[0]/value1[1];
                  break

              default:
                  return
            }
            
            display.value=value1[0];

          }


          else{
      
              display.value += b;
          }
      
    };
function clear(){
    display.value=0;
    
}

function percent(){
  display.value *= 0.01;
}

function negate(){
  display.value *= -1;
}

function dot(){
  display.value +='.';
}

*/

    /*
      let x = document.getElementById("1");
x.addEventListener("click", myFunction);
function myFunction() {
    document.getElementById("display").value += '1';
}
*/
/* //clear function
let display1 = document.getElementById("display")
document.getElementById("clear").onclick = function() {myFunction2()};
function myFunction2() {
    let clear1 = document.getElementById("clear").innerHTML;
   
display1.value = clear1;
  }
  */
  /*
  document.getElementById("clear").onclick = function() {myFunction2()};function myFunction2() {
     let clear1 = document.getElementById("clear").innerHTML;
     display1.value = clear1;
 
    }*/


/*
    
function clear1 () {
  display1.value = '0';
}
if(btnId == clear) {
  reset()
  UpdateDisplay()
}
else if(operator == divide){
}
else if(operator == percent) {
  value *=0,01
}
numberButtons.forEach(button =>
  button.addEventListener('click' {
    
  }
  )
  )
//document.getElementsByClassName(key)
// alla tal
// clear,+,-,x,=,/
// % (dela med 100), change operator 
// fix kod 
*/