let nameInStorage;
let nameParagraph;

window.addEventListener("DOMContentLoaded", () => {

  const btnSave = document.getElementById("save");
  btnSave.onclick = save;
  const btnRemove = document.getElementById("remove");
  btnRemove.onclick = remove;

});


const save = function (event) {
    
    let name=document.getElementById('name').value;

    localStorage.setItem("name",name);
    localStorage.setItem("date-now", new Date());

    verificaPresenzaNameInLocaleStorage();
    
  };

  
  const remove = function () {
    localStorage.removeItem("name");
    localStorage.removeItem("date-now");

    verificaPresenzaNameInLocaleStorage();
  };

  const verificaPresenzaNameInLocaleStorage = () => {
    
    
    nameInStorage = localStorage.getItem("name");
    
    if (nameInStorage) {
        nameParagraph = document.getElementById('nomeP');
        nameParagraph.innerText = nameInStorage;
    } else {
        nameParagraph = document.getElementById('nomeP');
        nameParagraph.innerText="";
    }
  };

let count = sessionStorage.getItem('count') || 0;

window.onload = setInterval(function() {
  count++;
  sessionStorage.setItem('count', count);
}, 1000); 