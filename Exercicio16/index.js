const n1 = document.querySelector('.n1')
const n2 = document.querySelector('.n2')

document.body.addEventListener('keyup', event => {
    if (event.target !== n1 || event.target !== n2) {
        const n1 = document.querySelector('.n1').value
        const n2 = document.querySelector('.n2').value
        const result = n1 * n2
        document.querySelector('.result').value = result
        if(n1 === "" || n2 === ""){
            document.querySelector('.result').value = "Insira um valor"
        }
    }
})