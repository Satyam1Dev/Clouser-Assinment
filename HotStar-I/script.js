


  let id;
  
    let movies_div = document.getElementById("movies")

    //<-------------------------function-1------------------------------->

    async function searchMovies(q) {
        try{
            let url = `https://www.omdbapi.com/?s=${q}&apikey=78abee60`;

        let res = await fetch(url);

        let data = await res.json();
        console.log("data:", data)
        return data.Search;

        }  catch(error){
    console.log("error:", error);
        }
    }
        
    //<-------------------------function-2------------------------------->



    function appendMovies(movies){
        movies_div.innerHTML = null
        if(movies === undefined){
            return false;
        }
        movies.forEach(function(el){
            let p = document.createElement('p');
            p.innerText = el.Title;

            movies_div.append(p);
        
        });
    }

    //<-------------------------function-3(main)------------------------------->


        async  function main() {
                        let query= document.getElementById("query").value;
                    let response =  searchMovies(query);
                    let data = await response;  
                        //  console.log("data:", data);                   
                        appendMovies(data)



    }

    function debounceFunction(func,delay){

        if(id){
            clearTimeout(id)
        }
      let id =  settimeout(function(){
        func();
        }, delay);
    }
   