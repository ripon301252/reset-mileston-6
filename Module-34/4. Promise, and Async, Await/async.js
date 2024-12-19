
    const myLoader = () => {
        return new Promise((resolve, reject) =>{
            const success = Math.random();                  // const success = true;
            if(success <= 0.5){                             // if(success){
                resolve(success)                            //    resolve(0.3)
            }                                               // }
            else{                                           // else{
                reject(success)                             //    reject(0.7)
            }                                               // }                                           
        })
    }
    myLoader()
    .then(data => console.log('resolved data', data))
    .catch(error => console.log('rejected with value', error))




    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))



    async function loadAlbums(){
        const res = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await res.json();
        console.log(data);
    }
    loadAlbums()
    


    const taskPhoto = async() =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await res.json();
        console.log(data);
    }
    taskPhoto()