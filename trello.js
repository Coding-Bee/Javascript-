const days =['Mon','Tue','Wed','Thursday','Fri','Sat','sunday']

//console.log(days[0]);
days.forEach(function(day,index){
    console.log(`starts with ${index+1} ---${day}`)
})

//console.log(days.length -1)
/**  for (let index=0; index<Array.length; index++)
 {
     const element = array[index];
 }
**/
//monday to friday
for (let index = 0; index < days.length; index++) {
    const element=days[index];
    console.log(element);
}

//printing in reverse order 
for (let index = days.length-1; index >=0 ; index--) {
    const element=days[index];
    console.log(element);

}