let student = {
    names: "Abdullah Bin Ashraf",
    class: 3,
    roll: 1,
    favoriteGame: "Soccer",
    friends: ["Arif", "Raihan", "Saimun", "Labib", "Faisal", "Rakib"],
    gender: "Male",
    favoriteFood: "Beef",
    car: {
        names: "Tesla",
        made: "Made in USA",
        ceo: "Elon Mask",
        speciality: {
            glass: "Bullet proof",
            engin: "Nep-308vh",
            color: ["Silver", "Red", "Rich Gold", "Love Green", "Lady Pink"],
            seats: "Super eligant seat"
        }
    },
    bikes: [
        { brand: "Royal Enfield", color: "Dark Gray", engin: "re-580hp" },
        { brand: "Mitshubishi", color: "Dark Red", engin: "mb-880hp" },
        { brand: "Dukati", color: "Blue", engin: "duka-900hp" },
        // "MOina",
        // "pulsar"
    ],
    hobby: "Gaming, Playing Football, tour etc"
}

function cart(bikes, search) {
    const choosen = [];
    for (const bike of bikes) {
        if (bike.color.toLowerCase().includes(search.toLowerCase())) {
            choosen.push(bike);
        }
    }
    return choosen;
    // console.log(choosen);
}

let result = cart(student.bikes, "Dark");
console.log(result);
// cart(student.bikes, "Dark");