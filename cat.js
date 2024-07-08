
//cat Mama

let catMama = {
    name:"Purrsha",
    breed:"Sphynx",
    age: "18 months",
};
    console.log (catMama.age);
    console.log( catMama.breed);


    //cat papa

    let catPapa = {
        name:"MewFasa",
        breed: "Maine coon",
        age: 2,
    };

    // 3. Combine Cats!

    function combineCats(mama, papa) {
        console.log(mama);
        console.log(papa);
        return{
            name: mama.name + papa.name,
            age: 1,
            breed: mama.breed + "-" + papa.breed
        };
    }
    console.log(combineCats(catMama, catPapa));
// Expected output:
// { name: "PurrshaMuFasa", age: 1, breed: "Sphynx-Maine Coon" }

// 4. Cat brain bender

// Two levels deep
console.log(combineCats(combineCats(catMama, catPapa), combineCats(catMama, catPapa)));

// Three levels deep
console.log(combineCats(
    combineCats(combineCats(catMama, catPapa), combineCats(catMama, catPapa)),
    combineCats(combineCats(catMama, catPapa), combineCats(catMama, catPapa))
));