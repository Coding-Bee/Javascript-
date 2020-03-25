//data types - Arrays 
// let one = 'one'
// let two = 'two'

const superHeroes = ['Iron man','Spiderman','Batman','Captain american']

console.log(superHeroes);
console.log(superHeroes[0]);
console.log(superHeroes[1]);

//length of the ARRAY 
console.log(superHeroes.length);

//last element
console.log(superHeroes[superHeroes.length-1]);


console.log(`we have ${superHeroes.length} super heroes`);



const numbers = ['one','Two','Three','Four','Five','Six']
numbers[1]='something'
console.log(numbers);
// start 
var a=numbers.shift()
console.log(a);

console.log(numbers);//fitst element is gone 
//something
numbers.unshift('hello world!')

//end
console.log('the element to be deleted is:'+""+numbers.pop());
console.log(numbers);

numbers.push('seven')
console.log(numbers);

