function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(data){
    const ul = document.getElementById('users-list')
    for(const user of data){
        // console.log(user);
        const li1 = document.createElement('li');
        li1.innerText = user.name ;
        ul.appendChild(li1);

        
        const li2 = document.createElement('li');
        li2.innerText = user.username;
        ul.appendChild(li2);

        // console.log(user.username);
        // console.log(user.email);
        // console.log(user.address.city);
    }
}