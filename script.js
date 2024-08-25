console.log("script")
let search="movies";
fetchData()
async function fetchData(){
    const url = `http://www.omdbapi.com/?s=${search}&apikey=66968ffe`;
    
     try{
        const responce =await fetch(url)
        const result= await responce.json()
        const list=result.Search
        let list_movie=''
        list.map((item)=>{
            console.log(item)
            list_movie+=`<div class="movie_container">
                    <div class="titel"></div>
                </div>`
        })
        console.log(result)
        document.querySelector(".list").innerHTML=list_movie
    }
    catch(error){
        console.log(error)
        alert("check your internet connection")
    }
}
