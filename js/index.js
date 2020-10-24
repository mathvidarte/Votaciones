const ids=document.getElementById('ids');
const nombre = document.getElementById('nombre');
const registrarBtn =document.getElementById('registrarBtn');
const idDos =document.getElementById('idDios');
const votarBtn =document.getElementById('votarBtn');
const votacionesBtn = document.getElementById('votacionesBtn');
const candidatosBtn = document.getElementById('candidatosBtn');

let json;
let clave;
let valor;
let punto = 0;


const database =firebase.database();



registrar = () => {
    let i = ids.value;
    let n = nombre.value;

    let objetoCandidato = {
        ids:i,
        nombre:n

    };
    
    database.ref('candidato').push().set(objetoCandidato);

}

votar = () => {
    let is = idDos.value;

    if (is == ids) {
        punto++;
        alert(json+":"+" "+punto);
    }
}

todosCandidatos = () => {
    json = JSON.stringify(myArray)
    alert(json);
}





registrarBtn.addEventListener('click', registrar);
votarBtn.addEventListener('click', votar);
candidatosBtn.addEventListener('click', todosCandidatos)

database.ref('candidato').on('value', function(data) {
    var arrayCan = [];
    //console.log(data.val()); 
    data.forEach(
        function(candidatos) {
            arrayCan.push(candidatos.val().nombre);
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
