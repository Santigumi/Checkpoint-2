async function getImagescats(){
    try{
        const getData = await fetch('https://cataas.com/cat/says/hola').then((res)=> res.url);
        return getData
    } catch{
    console.log("error")
    }
    }
    export default getImagescats