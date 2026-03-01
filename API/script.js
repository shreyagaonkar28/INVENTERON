fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        let tableBody = document.getElementById("tableBody");
        data.forEach(user => {
            let row = `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    })
    .catch(error => console.log("Error:", error));