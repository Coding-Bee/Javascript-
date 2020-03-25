const myMarks= []
myMarks.push(20)
myMarks.push(10)
myMarks.forEach(function(currentMark,totalMarks) {
    totalMarks = currentMark + totalMarks
    
    
})
if(totalMarks>50 && totalMarks<=60){
    console.log(`your marks are ${totalMarks} and grade is: E`)
}
else if(totalMarks>60 && totalMarks<=70){
    console.log(`your marks are ${totalMarks} and grade is: D`)
}
else if(totalMarks>70 && totalMarks<=80){
    console.log(`your marks are ${totalMarks} and grade is: C`)
}
else if(totalMarks>=80 && totalMarks<=90){
    console.log(`your marks are ${totalMarks} and grade is: B`)
}
else if(totalMarks>=90 && totalMarks<=100){
    console.log(`your marks are ${totalMarks} and grade is: A`)
}
else{
    console.log(`your grade is: F`)
}