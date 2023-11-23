
const fetchData = async () => {
    try {
        fetch('http://127.0.0.1:8000/api/devmanu/datos-personales')
        .then(response => response.json())
        .then(data => {
          
            // let Nombre = data.Payload[0].Nombre;
            // console.log(Nombre);
            show(data.Payload[0]);
        })


    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


function show(data) {
    let tab = 
        `<tr>
          <th>Name</th>
          <th>Office</th>
          <th>Position</th>
          <th>Salary</th>
         </tr>`;

                 tab += `<tr> 
            <td>${data.Nombre} </td>
            <td>${data.Nacionalidad}</td>
            <td>${data.FechaNacimiento}</td>       
        </tr>`;
   
    // Loop to access all rows 
//     for (let r of data) {
//         tab += `<tr> 
//     <td>${r.Nombre} </td>
//     <td>${r.Nacionalidad}</td>
//     <td>${r.FechaNacimiento}</td>       
// </tr>`;
//     }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}


fetchData();


// 	<table id="employees"></table>

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