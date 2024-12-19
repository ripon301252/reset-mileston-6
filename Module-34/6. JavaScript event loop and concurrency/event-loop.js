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
    console.log('Dd')
}

a();
