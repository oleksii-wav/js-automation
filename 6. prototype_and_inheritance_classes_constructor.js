/**
 * Create 2 objects: animal and cat, add move property to animal object, 
 * cat object must inherit move property from object animal
 */

const animal = {
    name: "Animal",
    move() {
        console.log("It moves")
    }
}

const cat = {
    __proto__: animal
}

cat.move()