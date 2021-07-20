for (i = 0; i < 11; i++){
    for(o = 0; o < 11; o++){
        const result = o*i
        document.querySelector('.resultado').innerHTML += (`${o} x ${i} = ${result} `) + '<br>'
    }
}

