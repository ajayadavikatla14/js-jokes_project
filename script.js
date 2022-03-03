const jokes=document.querySelector('#joke');

const btnval=document.querySelector('#jokeBtn');

const genarateJokes= async ()=>{
    try{
    const setHeaders={
        headers:{
            Accept:'Application/json'
        }
    }

    const res=await fetch('https://icanhazdadjoke.com/', setHeaders);
    const data=await res.json();
    jokes.innerHTML=data.joke;
}
catch(err){
    console.log(` ${err}`); 
}
}


btnval.addEventListener('click',genarateJokes);
// genarateJokes();

