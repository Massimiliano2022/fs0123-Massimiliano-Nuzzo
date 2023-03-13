// ESERCIZIO 1

class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }

    static comparaEtaUser(userX,userY) {

        if(userX.age > userY.age){
            return userX.firstName +' '+ userX.lastName +' è più grande.' ;
        }else if(userX.age < userY.age){
            return userY.firstName +' '+ userY.lastName +' è più grande.' ;
        }else{
            return userX.firstName +' '+ userX.lastName +' e ' + userY.firstName +' '+ userY.lastName + ' sono coetanei.';
        }
      } 

  }
  

  const user1 = new User('Mario','Rossi',23,'Torino');
  const user2 = new User('Giuseppe','Verdi',23,'Roma');

  console.log(User.comparaEtaUser(user1, user2));


//ESERCIZIO 2

let petList = [];

  class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }

    static comparaPadrone(pet1,pet2) {
        return pet1.ownerName === pet2.ownerName;
    }
}    

const pet1 = new Pet('Jack','Mario','dog','labrador');
const pet2 = new Pet('Kira','Mario','dog','labrador');

console.log(Pet.comparaPadrone(pet1,pet2));

function elaboroDatiForm(){

    let petForm=document.getElementById("petForm")

    let petName = document.getElementById('petName').value;
    let ownerName = document.getElementById('ownerName').value;
    let species = document.getElementById('species').value;
    let breed = document.getElementById('breed').value;

    const pet = new Pet(petName,ownerName,species,breed);

    petList.push(pet);

    //document.getElementById("petForm").reset();

    petForm.reset();

    console.log(petList);

    let listaAnimali = document.getElementById("petList");
    if (!listaAnimali) {
        // se l'elemento con id petList non esiste, creiamo il tag ol con id petList
        listaAnimali = document.createElement("ol");
        listaAnimali.setAttribute("id", "petList");
        petForm.appendChild(listaAnimali);
    }
    let item = document.createElement("li");
    let text = document.createTextNode(`${petName} (${species} - ${breed}), owned by ${ownerName}`);
    item.appendChild(text);
    listaAnimali.appendChild(item);

}
