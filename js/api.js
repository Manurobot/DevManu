const fetchData = async () => {
    try {
        fetch('http://127.0.0.1:8000/api/devmanu/datos-personales')
        .then(response => response.json())
        .then(data => {
          
            let Nombre = data.Payload[0].Nombre;
            console.log(Nombre);


            const elemento = document.getElementById('nombre');
            elemento.innerHTML = `<p>${Nombre}</p>`;
            elemento.appendChild(elemento);
        })


    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();


// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => {
//         const postTitle = data.title;
//         const postBody = data.body;

//         const postElement = document.createElement('div');
//         postElement.innerHTML = `
//             <h2>${postTitle}</h2>
//             <p>${postBody}</p>
//         `;

//         dataContainer.appendChild(postElement);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });