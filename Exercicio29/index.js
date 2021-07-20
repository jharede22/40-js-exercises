document.querySelector('.btn').addEventListener('click', function(){
    const numero = Math.floor(Math.random() * 10 + 1)
    const entrada = document.querySelector('.entrada').value
    console.log(numero)
    if (entrada != numero){
        alert("Infelizmente você errou")
    } else {
        alert("Parabens você acertou")
    }
})