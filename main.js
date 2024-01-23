const form = document.getElementById('form-deposito')


form.addEventListener('submit', function(e){
  
    e.preventDefault()

    const campoA = document.getElementById('campoA')
    const campoB = document.getElementById('campoB')
    const teste = document.getElementById('teste')


    
    
    if (parseFloat(campoB.value) > parseFloat(campoA.value)) {
        alert('Formulário enviado!')

        campoA.value = ''
        campoB.value = ''

    } else {
        alert('Ta incompleto!')
    }

})