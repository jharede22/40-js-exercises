document.querySelector('.btn').addEventListener('click', function(){
    const n1 = document.querySelector('.n1').value
    const n2 = document.querySelector('.n2').value

    if(n1 > 0 && n2 > 0) {
        const soma = parseInt(n1) + parseInt(n2)
        document.querySelector('.result').value = soma
    } else {
        alert('Valores precisam ser maior que 0')
    }
})