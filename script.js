// fetching the value
let constvalue= document.querySelector('#Counter');
console.log(constvalue);

const increment=()=>{
    // the value received is a string value hence here we are converting the value back to integer
    let value= parseInt(constvalue.innerText);
    // incrementing the received value
    value=value+1;
    // putting back the updated value
    constvalue.innerText=value;

};
const decrement=()=>{
    // the value received is a string value hence here we are converting the value back to integer
    let value= parseInt(constvalue.innerText);
    // incrementing the received value
    value=value-1;
    // putting back the updated value
    constvalue.innerText=value;


};