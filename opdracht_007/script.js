const red = function () {
    console.log("The wall has been painted red")
}
red();

const paint = function (item) {
    console.log(item + " green");

}
paint("the wall has been painted");

// Er komt dan alleen de kleur "green" te staan.
const paint1 = function (item) {
    console.log(item + " has been painted orange");
};
const paint2 = function (item) {
    console.log(item + " has been painted grey")
}
paint1("The north wall ");
paint2("The south-east wall ");

const north_wall = "The north wall";
const south_east_wall = "The south-east wall";

paint1(north_wall);
paint2(south_east_wall);

paint1(north_wall), paint2(south_east_wall);
// het veranderd de volgorde niet
paint2(south_east_wall), paint1(north_wall);
// het veranderd de volgorde
paint1(south_east_wall), paint2(north_wall);
// het wisselt de kleuren om



