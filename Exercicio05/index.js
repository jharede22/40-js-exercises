
document.getElementById('btn').addEventListener('click', function(){
    const input = document.getElementById('inptext').value
    
    console.log(`there is ${input.length} characters in ${input}`)
    alert(`there is ${input.length} characters in ${input}`)
})

