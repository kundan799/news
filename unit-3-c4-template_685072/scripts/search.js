// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
let n=document.getElementById("navbar");
n.innerHTML=navbar();
import {search,append} from "./fetch.js";

let search1 =(e)=>{
    let query=document.getElementById("search_input").value;
    if(e.key=="Enter"){
        // window.location.href="search.html"
        search(query).then((data)=>{
            
            console.log("data",data.articles)
            append(data.articles,caintaner)

        });
    }

}
document.getElementById("search_input").addEventListener("keydown",search1)