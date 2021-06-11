


// GET https://icanhazdadjoke.com/


const jokes = document.querySelector('#joke');
const jokeBtn =  document.querySelector('#jokeBtn');

// promise

// const generateJokes = ()=>{
    
//     const setHeader = {
//         headers: {
//             Accept:  "application/json"  
//         }
//     }


//     fetch('https://icanhazdadjoke.com' , setHeader)
//     .then((res)=>
//         res.json()
//     ).then((data)=>{
//         jokes.innerHTML =  data.joke;
//     }).catch((err)=>{
//         console.log(err)
//     })
// }

// async await
const generateJokes = async ()=> {

    try{
        const setHeader = {
            headers: {
                Accept:  "application/json"  
            }
        }
        const res =  await fetch('https://icanhazdadjoke.com', setHeader);
        const data  = await res.json();
        jokes.innerHTML = data.joke;
    
    }catch(err){
        console.log(err)
    }

}

    



jokeBtn.addEventListener('click' , generateJokes);
generateJokes();