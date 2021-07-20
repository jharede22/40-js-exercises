i = 0

while (i < 20) {
    if (i % 2 == 1) {
        i++
        document.querySelector('.resultado').innerHTML += (`${i} `)
    } else {
        i++
    }
}