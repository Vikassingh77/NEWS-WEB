
// let key="PJEdhdrjo1LsB8bjTKUnHVcjJVZCkVzzeD2tdZdZ";e02c68e5aeb7408aa83dba1e3f167fd4
let key="pub_453439a8107b3063f652e39090b510a96ca5d";
let carddata =document.querySelector(".carddata");
let searchbtn = document.getElementById("search");
let input = document.getElementById("inputdata");

const getdata = async (inp)=>{
    // https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${inp}&api-key=${key}
    // https://api.thenewsapi.com/v1/news/all?api_token=${key}&search=${inp}
    // let res = await fetch(`https://api.thenewsapi.com/v1/news/all?api_token=${key}&search=${inp}`);
let res = await fetch(`https://newsdata.io/api/1/latest?apikey=${key}&q=${inp}&language=en`);
let jsondata = await res.json();
 console.log(jsondata);

 input.value="";
 carddata.innerHTML="";
//  jsondata.data.forEach(function(data) {
jsondata.results.forEach(function(data) { 
if(!data.image_url) return;
let divs= document.createElement("div");
 divs.classList.add("card");
 carddata.appendChild(divs);

 divs.innerHTML=`  
<img src="${data.image_url}" alt="" srcset="">
 <h3>${data.title}</h3>
 <p>${data.description}</p>`

 divs.addEventListener("click",function(){
    window.open(data.source_url
    );
 })
 });

}
window.addEventListener("load",function(){
    getdata("india");
    
})
searchbtn.addEventListener("click",function(){
    let inputtext=input.value;

    getdata(inputtext);
})
function nav (put){
    getdata(put);
}