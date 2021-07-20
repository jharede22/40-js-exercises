let divInsert = [
    "Repetição",
    "Repetição",
    "Repetição",
    "Repetição",
    "Repetição"
]

//const divAlter = (rep) => {
function seila(rep) {
    document.querySelector('.resultado').innerHTML += rep
}

divInsert.forEach(function(item, posição, array){
    seila(item)
    console.log(posição)
    console.log(array)
})