const myTodos =[]

myTodos.push('buy bread')
myTodos.push('Record videos for youtube')
myTodos.push('Gym')


myTodos.forEach(function(todo, index){
    console.log(`your task no. ${index+1} is: ${todo}`)
})