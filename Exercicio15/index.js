document.querySelector('.entrada').addEventListener('keyup', function(){
    let nm1 = document.querySelector('.entrada').value
    let nm2 = nm1 % 2
    if (nm1 === "") {
        document.querySelector('.saida').value = 'Insira um valor'
    } else if (nm2 === 1) {
        document.querySelector('.saida').value = 'Impar'
    } else if (nm2 === 0){
        document.querySelector('.saida').value = 'Par'
    }
})

