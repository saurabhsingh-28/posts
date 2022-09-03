const btn= document.querySelector(".btn1");
const title=document.querySelector(".inp1");
const body=document.querySelector(".inp2");
const userid=document.querySelector(".inp3");
const postid=document.querySelector(".inp4");



btn.addEventListener("click",()=>{
 
console.log("hello");
  let p1= title.value;
  let p2= body.value;
  let p3= userid.value;
  let p4= postid.value;
  localStorage.setItem("newtitle",p1);
  localStorage.setItem("newbody",p2);
  localStorage.setItem("newuser",p3);
  localStorage.setItem("newpost",p4);
 console.log(localStorage.getItem("newtitle"));

 document.location.href="/index.html";
})