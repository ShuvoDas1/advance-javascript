const numbers = [2,4,6,8,16];
const output =  [];

for(let i = 0;i<numbers.length;i++){
    const num = numbers[i];
    const result =  num * num;
    output.push(result);
}

// ES6 map

const square =  element => element * element;
const result = numbers.map(element => element * element);

 console.log(result);

const square =  numbers.map(Math.sqrt);
const multiply =  numbers.map(x => x*10);
console.log(multiply);

const person = [
    {firstName : 'shuvo',lastName: "das"},
    {firstName : 'ankon',lastName : "das"},
    {firstName : 'ankit',lastName: "das"}
]
    function getFullName(item){
        let fullName =  [item.firstName,item.lastName].join('');
        return fullName;
    }
    const output =  person.map(getFullName);
    console.log(output);
    
//ES6 filter

const bigger =  numbers.filter(x => x < 5); // return array
const isThere  = numbers.find(x=> x < 5); // return first element
console.log(isThere);

