document.querySelector('.v1').addEventListener('keyup', function() {
    const v1 = document.querySelector('.v1').value;
    const descontovalor = v1 * 0.05
    const desconto = v1 - descontovalor

    document.querySelector('.result').value = (`O valor com 5% de desconto é ${desconto}`)
})