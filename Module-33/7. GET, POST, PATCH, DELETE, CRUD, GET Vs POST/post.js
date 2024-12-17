fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => postData(data))

function postData(posts){
    const postContainer = document.getElementById('posts-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        console.log(post)
        postDiv.innerHTML= `
            <h4>user-${post.userId}</h4>
            <h5>Post: ${post.title}</h5>
            <p>ID- ${post.id}</p>
            <p>Post Description-${post.body}</p>
        `;
        postContainer.appendChild(postDiv);
       
    }
}   