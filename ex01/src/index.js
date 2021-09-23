var myPet = {
  species: "Doberman",
  name: "Luna",
  legs: 4,
  friends: ["Max", "Zeus"],
};

function myFunction(myObj) {
  return myObj;
}

console.log(myFunction(myPet));

module.exports = { myPet, myFunction };
