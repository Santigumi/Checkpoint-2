async function getDescription(){
try{
    const getData = await fetch('https://catfact.ninja/fact').then((res)=> res.json());
    const description = getData
    return description.fact
} catch{
console.log("error")
}
}

export default getDescription