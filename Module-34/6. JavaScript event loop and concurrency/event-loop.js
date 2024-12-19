function a(){
    console.log('A')
    b();
    console.log('Aa')
}

function b(){
    console.log('B')
    d();
    console.log('Bb')
}

function d(){
    console.log('d')
    x()
    console.log('Dd')
}

function x(){
    console.log('x')
    y()
    console.log('xx')
}

function y(){
    console.log('y')
    z()
    console.log('yy')
}

function z(){
    console.log('z')
    console.log('zz')
}

setTimeout(() => {
    console.log('inside time')
}, 2000)

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

a(); // call stack

