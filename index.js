console.log("hello");
let val;
let rows=document.getElementsByClassName("row");
let  main= document.getElementById("main-container");
console.log(main);


const fetchText=async()=>{
 
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/");
     data= await response.json();
    console.log(data); 
    
     val = data.length;
    for(let i=0;i<val;i++){
   rows[0].innerHTML+=`<div class="cols col-lg-3 col-md-4 col-sm-6">
   <div class="row row1">
     <div class="cols1 col title">
        <span>Title : &nbsp; </span>
        <span id="title_content">${(data[i].title).substring(1,15)+"..."}</span>
     </div>
     <div class="w-100"></div>
     <div class="cols2 col body">${(data[i].body).substring(1,60)+"....."}</div>
     <div class="w-100"></div>
     <div class="cols3 col-9"><span id="userid">User Id : ${data[i].userId}</span></div>
     <div class="cols4 col"> id : <span id="id">${data[i].id}</span></div>
   </div>
   </div> `
}
  
    rows1= document.getElementsByClassName("row1");

  for(let i=0;i<val;i++){
   rows1[i].addEventListener("click",()=>{
      localStorage.setItem("postID",i+1);
      console.log(i);
    
  document.location.href="/posts.html";
return false;
        
   })
  }

};

fetchText();

const fun3=()=>{
   let newtitle= localStorage.getItem("newtitle");
   let newbody= localStorage.getItem("newbody");
   let newuser= localStorage.getItem("newuser");
   let newpost= localStorage.getItem("newpost");
   rows[0].innerHTML=   rows[0].innerHTML+ `<div class="cols col-lg-3 col-md-4 col-sm-6">
   <div class="row row1">
     <div class="cols1 col title">
        <span>Title : &nbsp; </span>
        <span id="title_content">${(newtitle).substring(1,15)+"..."}</span>
     </div>
     <div class="w-100"></div>
     <div class="cols2 col body">${(newbody).substring(1,60)+"....."}</div>
     <div class="w-100"></div>
     <div class="cols3 col-9"><span id="userid">User Id : ${newuser}</span></div>
     <div class="cols4 col"> id : <span id="id">${newpost}</span></div>
   </div>
   </div> `;

}
   
fun3();
 




  


