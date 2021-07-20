document.querySelector('.btn').addEventListener('click', function(){
    const entrada = document.querySelector('.entrada').value
    const result = entrada.includes('dota')

    document.querySelector('.resultado').value = result
})