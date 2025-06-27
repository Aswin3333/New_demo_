document.addEventListener('DOMContentLoaded',()=>{
  const movform = document.getElementById("form");
  const movres = document.getElementById("movres");
  movform.addEventListener("submit", async (e)=>{
    const movienam = document.getElementById("movinp").value;
    
    //prevent auto load
    e.preventDefault();
    fetchmovie(movienam);
  })
  
  async function fetchmovie(movienam){
    try{
      //http://www.omdbapi.com/?apikey=bc971355&
      movres.innerHTML ='<h3 style="color:red">Loading....</h3>';
      
      const Response = await fetch(`http://www.omdbapi.com/?apikey=bc971355&s=${movienam}`);
      const data = await Response.json();
      if(data.Response ==='False'){
        throw new Error('No movie Found');
      }
      display(data.Search);
      
    }catch(error){
      movres.innerHTML = `<h3 style="color:red">${error} while search try again later</h3>`
      
    }
  }
    
    //display
    function display(movies){
      movres.innerHTML =`
      <div>
      ${movies.map(movie => `
      <div>
      <img src="${movie.Poster}"
      alt="${movie.Title}"/>
      <h3>${movie.Title}</h3>
      <h3>${movie.Year}</h3>
      <h3>${movie.Type}</h3>

      </div>
      `).join("")}
      </div>
      `
    };
  });
