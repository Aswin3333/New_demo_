document.addEventListener('DOMContentLoaded', ()=>{
  // create path
  const contain = document.getElementById('container');
  const apiurl = "https://jsonplaceholder.typicode.com/posts";
  
async function fetchposts(){
  try{
    const response = await fetch(apiurl);
    const posts = await response.json();
    contain.innerHTML = "";

posts.forEach((post)=>{
  const postel = createpost(post);
  contain.appendChild(postel);
  
  
});
  }catch{
    contain.innerHTML = '<p style="color:red">error</p>'
  
  }
}
function createpost(post){
// create element
const divs = document.createElement('div');
divs.id = "post";


const title = document.createElement('h3')
title.id = "title";
title.innerHTML =post.title;

const pass = document.createElement('p')
pass.id = "passage";
pass.innerHTML = post.body;

divs.appendChild(title);
divs.appendChild(pass);

return divs

};

fetchposts();
});