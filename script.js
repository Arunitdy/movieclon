console.log("script")
//main background

let url_background = 'https://wallpapers.com/images/hd/the-avengers-in-4k-united-to-save-the-universe-wbmp983ocnwvooku.jpg';

document.documentElement.style.setProperty("--url_background", `url('${url_background}')`);

fetchData("marvel")

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
//let section="home" //to check which sectioin

//function to fetch data
async function fetchData(search){
/*
    switch(section){
        case " home":search
            break;
        case " Series":search+=section
            break;
        case " Movies":search+=section
            break;
        case " Kide":search+=section
            break;
        default:
            console.log("not valid")
    }
    */
    console.log(search)
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



//menu

//home
let yt_url
const yt=document.querySelector(".yt")

document.querySelector(".Home").addEventListener("click",function(){
    //section=" Home"
    console.log("Home")
    fetchData("marvel")
    let url_background = 'https://wallpapers.com/images/hd/the-avengers-in-4k-united-to-save-the-universe-wbmp983ocnwvooku.jpg';
    yt_url="https://www.youtube.com/watch?v=X7G1soqzaRA"

    yt.setAttribute("href",yt_url) //for watch button
    document.documentElement.style.setProperty("--url_background", `url('${url_background}')`);

    document.querySelector(".Home").style.cssText="border: 2px solid #b4b4b4"
    document.querySelector(".Kide").style.cssText="border: none"
    document.querySelector(".Drama").style.cssText="border: none"
    document.querySelector(".Series").style.cssText="border: none"

    //discription of movie
    document.querySelector(".description_main").innerHTML = `<div class="description">
                                                                <mark>Avengers: Endgame</mark> is a 2019 superhero 
                                                                film produced by Marvel Studios
                                                                and directed by Anthony and Joe Russo. It is the fourth
                                                                 Avengers film and a direct sequel
                                                                to 2018's "Avengers: Infinity War." The movie serves as 
                                                                the epic conclusion to the Marvel
                                                                Cinematic Universe's (MCU) "Infinity Saga," which spans 22 
                                                                films beginning with 2008's "Iron Man."
                                                            </div>`;

})
//Series
document.querySelector(".Series").addEventListener("click",function(){
   // section=" Series"
   console.log("Series")
   fetchData("series")
    let url_background = 'https://a-static.besthdwallpaper.com/stranger-things-children-afraid-wallpaper-2000x1333-81674_39.jpg';

    yt_url="https://www.youtube.com/watch?v=Namme0qEbSk"

    yt.setAttribute("href",yt_url) //for watch button
    document.documentElement.style.setProperty("--url_background", `url('${url_background}')`);

    document.querySelector(".Series").style.cssText="border: 2px solid #b4b4b4"
    
    document.querySelector(".Home").style.cssText="border: none"
    document.querySelector(".Drama").style.cssText="border: none"
    document.querySelector(".Kide").style.cssText="border: none"
    document.querySelector(".description_main").innerHTML = `<div class="description">
                                                                <mark>Stranger Things</mark> is a popular
                                                                Netflix series created by the Duffer
                                                                Brothers. First released in 2016, the
                                                                show blends elements of supernatural horror
                                                                , 1980s nostalgia, and coming-of-age drama.
                                                                It quickly became a cultural phenomenon
                                                                and has received critical acclaim for its
                                                                storytelling, characters, and nostalgic 
                                                                references to 1980s pop culture.
                                                            </div> `
})
//Movies
document.querySelector(".Drama").addEventListener("click",function(){
   // section=" Drama"
   console.log("Drama")
   fetchData("korean")
    let url_background = 'https://e1.pxfuel.com/desktop-wallpaper/145/647/desktop-wallpaper-review-my-girlfriend-is-an-alien-my-girl-chinese-drama.jpg';
    yt_url="https://www.youtube.com/watch?v=1q3BhWq1Liw"

    yt.setAttribute("href",yt_url) //for watch button
    document.documentElement.style.setProperty("--url_background", `url('${url_background}')`);

    document.querySelector(".Drama").style.cssText="border: 2px solid #b4b4b4"

     document.querySelector(".Home").style.cssText="border: none"
     document.querySelector(".Kide").style.cssText="border: none"
     document.querySelector(".Series").style.cssText="border: none"
     
    document.querySelector(".description_main").innerHTML = `<div class="description">
                                                            <mark>My Girlfriend is an Alien</mark> is a Chinese romantic
                                                             comedy-drama series that aired in 2019. The show tells the
                                                              story of an alien girl named Chai Xiaoqi who accidentally
                                                               lands on Earth and falls in love with a human, Fang Leng,
                                                                a successful and aloof CEO. The series blends humor, romance,
                                                                 and science fiction elements, making it a popular and light
                                                                 -hearted watch with a strong following among international 
                                                                 audiences.
                                                        </div> `

})
//Kide
document.querySelector(".Kide").addEventListener("click",function(){
   // section=" Kide"
   console.log("Kide")
   fetchData("disney")
    let url_background = 'https://4kwallpapers.com/images/wallpapers/pixar-toy-story-2560x1440-15986.jpg';
    yt_url="https://www.youtube.com/watch?v=7__sKqLaTMc"

    yt.setAttribute("href",yt_url) //for watch button
    document.documentElement.style.setProperty("--url_background", `url('${url_background}')`);

    document.querySelector(".Kide").style.cssText="border: 2px solid #b4b4b4"
    
    document.querySelector(".Drama").style.cssText="border: none"
    document.querySelector(".Series").style.cssText="border: none"
    document.querySelector(".Home").style.cssText="border: none"

    document.querySelector(".description_main").innerHTML = `<div class="description">
                                                                <mark>Toy Story</mark> is a 1995 animated film
                                                                produced by Pixar Animation Studios and 
                                                                released by Walt Disney Pictures. Directed by
                                                                John Lasseter, it was the first feature-length
                                                                film entirely created using computer animation.
                                                                The movie follows a group of toys, led by Woody and Buzz Lightyear,
                                                                that come to life when humans aren't around. "Toy Story" was both a critical
                                                                    and commercial success, leading to several sequels and
                                                                    establishing Pixar as a leading animation studio.
                                                            </div> `

})