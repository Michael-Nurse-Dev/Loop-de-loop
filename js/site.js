//Keep concerns seperate

//Get values from the page
//Controller layer function
function getValues(){
   let startValue = parseInt(document.getElementById("startValue").value);
   let endValue = parseInt(document.getElementById("endValue").value);
   let numbers = [];
 

   if (Number.isInteger(startValue) && Number.isInteger(endValue)) {      
      //call function to generate numbers
      numbers = generateNumbers(startValue, endValue)
      displayNumbers(numbers);
   }
   else{
      alert("Please enter only integers")
   }

}

//Generate Numbers from the start page
//Logic layer function(s)
function generateNumbers(sValueParam, eValueParam){
   
   let numbers = [];

   for (let i = sValueParam; i <= eValueParam; i++) {
     numbers.push(i);      
   }

   return numbers;
}

//Display the results
//UI layer function
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

   document.getElementById("results").innerHTML = templateRows;

}