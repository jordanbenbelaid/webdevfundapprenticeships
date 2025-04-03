let shoppingCart = ['apple', 'apple', 'apple', 'orange', 'banana']

//getting a single element in an array
shoppingCart[2]

//adding a new element to the array
shoppingCart.push('pear')
console.log(shoppingCart[5])

//removing an element from the array (if nothing is put in the brackets of pop, the last element will be removed)
//if there are multiple of the same element in the array, it removes the one latest in the array
shoppingCart.pop('apple')
console.log(shoppingCart[2])

console.log(shoppingCart[0])

//for loop
//part 1 of for loop - initialiser
//part 2 of for loop - end point
//part 3 of for loop - incrementer
for(let i = 0; i < shoppingCart.length; i++){
    console.log(shoppingCart[i])
}

//for ... of loop
for(let fruit of shoppingCart){
    console.log(fruit);
}


// () - parantheses
// {} - blocks of code
// [] - arrays