let search= async(query)=>{
    try{
        let res= await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);
        let data = await res.json()
        //console.log(data)
        return data
    }catch(err){
        console.log(err)

    }
}

let search2= async(query)=>{
    try{
        let res= await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`);
        let data = await res.json()
        //console.log(data)
        return data
    }catch(err){
        console.log(err)

    }
}
let search3= async(query)=>{
    try{
         query="tesla"
        let res= await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);
        let data = await res.json()
        //console.log(data)
        return data
    }catch(err){
        console.log(err)

    }
}
let append =(data,caintaner)=>{
    data.forEach(el => {
        let div=document.createElement("div");
        div.setAttribute("class","news")
        let image=document.createElement("img");
        image.src=el.urlToImage;
        let title=document.createElement("h3");
        title.innerText=el.title;
        let decs=document.createElement("p");
        decs.innerText=el.description;
        div.append(image,title, decs);
        caintaner.append(div)
        
    });

}
export {search,append,search2,search3}

// (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0:
// author: "Igor Bonifacic"
// content: "Tesla delivered 310,048 vehicles over the first three months of 2022, the automaker announced\r\n on Saturday. This was an exceptionally difficult quarter due to supply chain interruptions and China Ze… [+920 chars]"
// description: "Tesla delivered 310,048 vehicles over the first three months of 2022, the automaker announced\r\n on Saturday. “This was an exceptionally difficult quarter due to supply chain interruptions and China Zero-Covid policy,” Musk said\r\n on Twitter shortly after Tesl…"
// publishedAt: "2022-04-02T21:41:41Z"
// source: {id: 'engadget', name: 'Engadget'}
// title: "Tesla's deliveries increased despite supply shortages and plant closures"
// url: "https://www.engadget.com/tesla-q-1-2022-deliveries-214141313.html"
// urlToImage: "https://s.yimg.com/os/creatr-uploaded-images/2022-03/733d9be0-b2cd-11ec-b7f9-382caaedc1ae"