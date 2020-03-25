
//local and global scope 
let iAmGlobal = 'somevalue'

if(true) {
    var iAmLocal = 'someMoreValue'
    iAmGlobal = 'superman'
    console.log(iAmGlobal);
    console.log(iamLocal);
     
}
console.log(iamLocal);
console.log(iAmGlobal);