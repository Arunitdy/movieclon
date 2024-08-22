console.log("script")
let search="movies";
fetchData()
async function fetchData(){

    
    const url = `http://www.omdbapi.com/?s=${search}&apikey=66968ffe`;
    
     try{
        const responce =await fetch(url)
        const result= await responce.json()
        const list=result.Search
        list.map((item)=>{
            console.log(item)
        })
        console.log(result)
    }
    catch(error){
        console.log(error)
        alert("check your internet connection")
    }
}