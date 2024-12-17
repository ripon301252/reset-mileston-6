function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => displayUsers(data))
}
function displayUsers(data){
    console.log(data);
}
