// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
let n=document.getElementById("navbar");
n.innerHTML=navbar();
import {search,append,search2,search3} from "./fetch.js";
let count=0;
let search1 =(e)=>{
    let query=document.getElementById("search_input").value;
    if(e.key=="Enter"){
        count++;
         //window.location.href="search.html"
        search(query).then((data)=>{
            
            console.log("data",data.articles)
            let caintaner=document.getElementById("caintaner");
            caintaner.innerHTML=null;
          
            
            append(data.articles,caintaner)

        });
    }

}
document.getElementById("search_input").addEventListener("keydown",search1);
let catag=document.getElementById("sidebar").children;
//console.log(catag)


function wh(){
    let query=document.getElementById("search_input").value;
    //if(e.key=="Enter"){
         //window.location.href="search.html"
        search3(query).then((data)=>{
            
            console.log("data",data.articles)
            let caintaner=document.getElementById("caintaner");
            caintaner.innerHTML=null;
          
            
            append(data.articles,caintaner)

        });
}
wh()

function csearch(){
    search2(this.id).then((data)=>{
            
        console.log("data",data.articles)
        let caintaner=document.getElementById("caintaner");
        caintaner.innerHTML=null;
      
        
        append(data.articles,caintaner)

    });
}
for(let el of catag ){
    el.addEventListener("click",csearch)
}

