var id=localStorage.getItem("postID");
const comment=document.querySelector(".card-link");
const comment1=document.querySelector(".card1");
console.log(id);
const fun1=async(i)=>{
 
   let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`);
   let data1= await response.json();


 console.log(document.querySelector("#post-title"));
   document.querySelector("#post-title").innerHTML=data1.title;
   document.querySelector(".card-text").innerHTML=data1.body;
   document.getElementById("userid").innerHTML=`User Id : ${data1.userId}`;
   document.getElementById("postid").innerHTML=`post Id : ${data1.id}`;
  document.body.style.opacity=1;
}
const fun2=async()=>{
 
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    let data2= await response.json();
    console.log(data2);
 
    for(let i=0;i<data2.length;i++){
        document.querySelector(".card1").innerHTML+=`  <div class="card-body"> <div style="text-decoration:solid;" class="common-style1">User ID : ${data2[i].id}</div>
        <blockquote class="blockquote mb-0" style="font-size: 1.05rem;">
          <p>" ${data2[i].body} "</p>
          <footer class="blockquote-footer common-style1">${data2[i].name}</footer>
          <div class="mail common-style1">Mail ID : ${data2[i].email}</div>
        </blockquote>
      </div>
      <hr>`
    }



}

fun1(id);
fun2();
comment.addEventListener("click",()=>{
    
  
   if(comment1.classList.contains("visible")){
    comment.innerHTML="Hide Comments";
    comment1.classList.remove("visible");
   }
   else{
    comment.innerHTML="Comments";
    comment1.classList.add("visible");
   }
 
    
})



