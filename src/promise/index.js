const promise = new Promise(function (resolve, reject){
    resolve('hey');
});

const cows = 20;
const countCows = new Promise(function (resolve, reject){
    if (cows >= 10){
        //Necesario usar Los parametos que se establecieron en la function
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject(`there is no minimal cows required, because we have ${cows} cows`);
    }
});

//Esta es la forma de invocar una Promise
countCows.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('finaly');
});