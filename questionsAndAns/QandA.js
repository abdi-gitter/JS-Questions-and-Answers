/*? 1. Write a simple JavaScript program to join all elements of the following array into a string.
Example: input =  ['Red', 'Green', 'White', 'Black']   => output= "Red,Green,White,Black" */

//Answer

//Using Array Methods
const input = ['Red', 'Green', 'White', 'Black'];
const output = input.join(',');
console.log(output);
//Using a for loop
const elements = ['Red', 'Green', 'White', 'Black'];
let resultString = '';

for (let i = 0; i < elements.length; i++) 
	{
        resultString += elements[i];
               if (i < elements.length - 1) 
            {
                resultString += ",";
            }
}
console.log(resultString);  
