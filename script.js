let input = document.querySelector('#n'), submit = document.querySelector('#submit')

submit.addEventListener('click', () => {
    if(input.value != "" && input.value != NaN && Number.isInteger(parseInt(input.value))) {
        numberOfReps = parseInt(input.value), d = 0;


    for (i = 0; i < numberOfReps; i++) {
        let x = Math.random(),
            y = Math.random()
            
        let idk = ((x**2) + y**2)
        if (idk <= 1) {
            d += 1
        }
        
    }

   

    console.log("sla " + (d))
    let pi = 4 * (d/ numberOfReps)

    document.querySelector('#textA').innerHTML = `Aproximação de π = ${pi.toFixed(6)}`
    } else {
        alert("Por favor, Insira um número antes de Enviar!!")
    }
})




let atan = document.querySelector('#result')

atan.innerHTML += (4 * Math.atan(1)).toFixed(6).toString()



