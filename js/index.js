const ids=document.getElementById('ids');
const nombre = document.getElementById('nombre');
const registrarBtn =document.getElementById('registrarBtn');
const idDos =document.getElementById('idDos');
const votarBtn =document.getElementById('votarBtn');
const votacionesBtn = document.getElementById('votacionesBtn');
const candidatosBtn = document.getElementById('candidatosBtn');

let json;
let clave;
let valor;
let punto = 0;
let i;


const database =firebase.database();



registrar = () => {
    i = ids.value;
    let n = nombre.value;

    let objetoCandidato = {
        ids:i,
        nombre:n

    };
    
    database.ref('candidato').push().set(objetoCandidato);

}

votar = () => {
    let is = idDos.value;

    if (is == clave) {
        punto++;
        
    }
}

todosCandidatos = () => {
    json = JSON.stringify(myArray)
    alert(json);
}

votaciones = () => {
    alert(json+":"+" "+punto);
}





registrarBtn.addEventListener('click', registrar);
votarBtn.addEventListener('click', votar);
candidatosBtn.addEventListener('click', todosCandidatos)
votacionesBtn.addEventListener('click', votaciones);

database.ref('candidato').on('value', function(data) {
    var arrayCan = [];
    //console.log(data.val()); 
    data.forEach(
        function(candidatos) {
            arrayCan.push(candidatos.val().nombre);
            clave = candidatos.key;
            myArray = arrayCan;

        }
       /* function(candidatos) {
             clave=candidatos.key;
             valor=candidatos.val().nombre;
            console.log(clave);
            console.log(valor);
        }*/

    ); 
         
    
})
