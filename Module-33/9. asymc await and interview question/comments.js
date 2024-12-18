const loadComments = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('error happened', error))
}

const loadComments2 = async() =>{
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await res.json();
        console.log(data);
    }
    
    catch(error){
        console.error('data load error')
    }
}

//--------------- COMMON INTERVIEW QUESTION------------------------
/*
    1. What is an API ?
    2. What are the HTTP methods supported by REST?
    3. Can you use GET request instead of put to create a resource?
    4. What is the difference between PUT and POST?
    5. What is JSON?
    6. What are CRUD operations?
    7. what is the file extension of JSON?
    8. what are the data types supported by JSON?
    9. what is the role of JSON.stringify?
    10. Show how to parse a JSON.
    11. Tell us the difference between GET and POST
*/
