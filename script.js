console.log("script")
//main background

const url_background = 'https://wallpapers.com/images/hd/the-avengers-in-4k-united-to-save-the-universe-wbmp983ocnwvooku.jpg';

document.documentElement.style.setProperty("--url_background", `url('${url_background}')`);


//input taker
document.querySelector(".search__input").addEventListener('keydown',function(event){
    if(event.key==="Enter" && event.target.value!==""){
        event.preventDefault();
        const inputValue = event.target.value;
        console.log(inputValue)
        fetchData(inputValue)
    }
    else if(event.key==="Enter" && event.target.value ==''){
        console.log("enter input")
    }
})

//function to fetch data
async function fetchData(search){
    const url = `http://www.omdbapi.com/?s=${search}&apikey=66968ffe`;
     try{
        const responce =await fetch(url)
        const result= await responce.json()
        const list=result.Search
        let list_movie=''
        list.map((item)=>{
            console.log(item)
            list_movie+=`<img src="${item.Poster}" class="movie_container" alt="${item.Titel}">`
        })
        console.log(result)
        document.querySelector(".list").innerHTML=list_movie
    }
    catch(error){
        console.log(error)
        alert("check your internet connection")
    }
}
