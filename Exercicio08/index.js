document.querySelector('.btn').addEventListener('click', function() {
    const nome = document.querySelector('.nome').value
    const sobrenome = document.querySelector('.sobrenome').value

    alert(`Olá ${nome} ${sobrenome}, seja bem vindo`)
    console.log(`Olá ${nome} ${sobrenome}, seja bem vindo`)
})