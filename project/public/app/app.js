document.querySelector('#myButton')
    .onclick = () => fetch('http://localhost:3000/notas')
        .then(res => {
            if(res.ok)
                res.json()
            return Promise.reject(res.statusText)
        })
        .then(notas => console.log(notas))
        .catch(console.log)