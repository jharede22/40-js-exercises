document.querySelector('.idade').addEventListener('keyup', function(){
    const n1 = document.querySelector('.idade').value
    const result = 2021 - n1

    if (result < 18) {
        document.querySelector('.result').value = "Você é menor de idade"
    } else if (n1 === "") {
        document.querySelector('.result').value = "Preencha o campo acima"
    } else {
        document.querySelector('.result').value = "Você é maior de idade"
    }
})

