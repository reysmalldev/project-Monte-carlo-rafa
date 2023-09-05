let input = document.querySelector('#n'), submit = document.querySelector('#submit')

submit.addEventListener('click', () => {
    let numberOfReps = input.value,
    isEmpty = input.value != "", 
    isNan = input.value != NaN, 
    numIsInteger = Number.isInteger(parseInt(input.value)),  
    isSecureLength = input.value.length <= 8, 
    d = 0;
    numberOfReps = parseInt(numberOfReps)
    
    
    console.log(`isEmpty ${isEmpty}, isnan ${isNan} isinteger ${numIsInteger} issecure ${isSecureLength}`)
    if(isEmpty &&  isNan  && numIsInteger  && isSecureLength) {

       
        for (i = 0; i < numberOfReps; i++) {
            let x = Math.random(),
                y = Math.random()
                
            let idk = ((x**2) + y**2)
            if (idk <= 1) {
                d += 1
            }
            
        }

   
        console.log("toma ",isSecureLength)
        console.log("sla " + (d))
        
        let pi = 4 * (d/ numberOfReps)
        document.querySelector('#textA').innerHTML = `Aproximação de π = ${pi.toFixed(6)}`

    }else if (!isSecureLength) {
        alert(`O número não pode ter mais de 8 algarismos!!`) 
    } 
    
    else {
        alert("Por favor, Insira um número antes de Enviar!!")
    }
})




let atan = document.querySelector('#result')

atan.innerHTML += (4 * Math.atan(1)).toFixed(6).toString()



