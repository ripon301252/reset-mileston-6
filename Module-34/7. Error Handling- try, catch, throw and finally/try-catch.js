function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error')

    try{
        const age = parseInt(ageText);
        if(isNaN(age)){
            throw 'please enter a number'
        }
        else if(age < 18){
            throw 'bacha kaccha not allowed'
        }
        else if(age > 30){
            throw 'old man not allow '
        }
        errorTag.innerHTML = '';
    }
    catch(err){
        errorTag.innerHTML = 'Error : ' + err
    }
    finally{
        console.log('All done');
    }
    console.log(11111)
}