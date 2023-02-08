bikes = [
    { brand: "Royal Enfield", color: "Dark Gray", engin: "re-580hp" },
    { brand: "Mitshubishi", color: "dark Red", engin: "mb-880hp" },
    { brand: "Dukati", color: "Blue", engin: "duka-900hp" }
];

function cart(bikes, search) {
    const choosen = [];
    for (const bike of bikes) {
        if (bike.color.toLowerCase().includes(search.toLowerCase())) {
            choosen.push(bike);
        }
    }
    return choosen;
}

let result = cart(bikes, "Dark");
console.log(result);