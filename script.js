const data = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
];

function renderUserList() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    // Group users in rows of 3
    const rows = Math.ceil(data.length / 3);
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        
        // Add up to 3 users per row
        const start = i * 3;
        const end = start + 3;
        const rowData = data.slice(start, end);

        rowData.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');
            
            const avatar = document.createElement('img');
            avatar.src = user.avatar;
            avatar.classList.add('avatar');
            
            const userInfo = document.createElement('div');
            userInfo.classList.add('user-info');
            
            const name = document.createElement('span');
            name.textContent = `${user.first_name} ${user.last_name}`;
            
            const email = document.createElement('span');
            email.textContent = user.email;
            
            userInfo.appendChild(name);
            userInfo.appendChild(email);
            
            userCard.appendChild(avatar);
            userCard.appendChild(userInfo);
            
            row.appendChild(userCard);
        });

        userList.appendChild(row);
    }
}

renderUserList();
