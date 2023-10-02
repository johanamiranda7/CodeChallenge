const url = "https://jsonplaceholder.typicode.com/users"



const button = document.getElementById('submit')

button.addEventListener('click', ()=>{
    const name = document.getElementById('name').value
    const lastName = document.getElementById('lastname').value
    const birthdate = document.getElementById('birthdate').value
    
    const requestBody = {
        name: name,
        lastName: lastName,
        birthdate: birthdate
    }

    console.log(requestBody);


    fetch(url, {
        method: 'POST',
        body: JSON.stringify({requestBody}),
        headers: {
            'Content-Type': 'application/json' // Especificar el tipo de contenido como JSON
        }
    })
    .then(response => response.json())
    .then(data =>{
        console.log(data);
    })
})