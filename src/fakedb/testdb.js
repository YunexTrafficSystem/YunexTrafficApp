const url = '127.0.0.1:3000'
const route = 'electrics'

console.log('Iniciada la depuración en el server ✨')

fetch('http://localhost:3000/electrics')
    .then((res) => res.text())
    .then((body) => {
        console.log(body)
    })


