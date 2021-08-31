//Let's keep concerns seperate as follows: 
// 1. The program control(the controller).
// 2. The domain logic and data model (the model).
// 3. The user interface(UI or view).

//The Controller
function getValues(){
   let startValue = parseInt(document.getElementById("startValue").value);
   let endValue = parseInt(document.getElementById("endValue").value);
   
   let numbers = [];
 
   if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
      
      //Call a function to generate numbers.
      numbers = generateNumbers(startValue, endValue)
      
      //Call a function to display results on the website.
      displayNumbers(numbers);
   }
   else{
      alert("Please enter only integers")
   }
}


//Model function
function generateNumbers(sValueParam, eValueParam){
   
   let numbers = [];

   for (let i = sValueParam; i <= eValueParam; i++) {
     numbers.push(i);      
   }

   return numbers;
}

//UI function
function displayNumbers(numbers){

   let templateRows = "";

   for (let i = 0; i < numbers.length; i++) {
      let n = numbers[i];
      let className = "";

      if (n % 2 == 0) {
         className = "even";
      }
      else{
         className = "odd";         
      }

      templateRows += `<tr><td class="${className}">${n}</td></tr>`;      
   }

   // Insert the final result into the DOM.
   document.getElementById("results").innerHTML = templateRows;
}