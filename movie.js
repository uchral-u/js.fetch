const main = async () => {
  const containerElement = document.getElementById("container");
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=8476a7ab80ad76f0936744df0430e67c&language=en-US&page=1ps://api.themoviedb.org/3"
  );
  const { results } = await response.json();
  console.log(results);
  results.forEach((movie) => {
    const newElement = document.createElement("div");
    newElement.classList.add(
      "flex",
      "max-w-[330px]",
      "rounded-1",
      "hover:bg-red-500",
      "mx-auto"
    );
    newElement.innerHTML = `<div class="bg-[#2a2a2a]">
    
    <div><img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="w-full h-[375px] rounded-[3px] border-[1px] "></div> <div>
    <div class="flex flex-col items-center p-5"> <span class="text-white">${movie.original_title}</span>
     <span class="font-bold text-white text-[15px] p-2">${movie.release_date} </span>
     <button class="text-white  bg-purple-700 rounded-full p-2 " >⭐${movie.vote_average}</button>
      <span class="text-white p-5 line-clamp-2">${movie.overview}</span>
     </div>
     
     
     
     </div>
    
     </div>`;
    containerElement.appendChild(newElement);
  });
};

main();

const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
