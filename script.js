let input = document.querySelector('#n'), submit = document.querySelector('#submit')

submit.addEventListener('click', () => {
    numberOfReps = parseInt(input.value)

    for (i = 0; i < numberOfReps; i++) {
        let x = Math.random(), y = Math.random()
        r = Math.sqrt((x * x + y * y))

        if (r <= 1) {
            
        }
    }
})