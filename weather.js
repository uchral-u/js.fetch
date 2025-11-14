const city = document.getElementById("city-input");
const weth = document.getElementById("weather-info");

async function main() {
  if (city.value) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=ffc74c9e41d3cd99bf6bb25a7f582a7a`
    );
    const data = await response.json();
    weth.innerHTML = `in ${city.value}'s weather is ${data.weather[0].main}`;

    console.log(data);
  }
}
main();

// async function main() {
//   const usersElement = document.getElementById("users");
//   const response = await fetch("https://dummyjson.com/users");
//   const { users } = await response.json();
//   users.forEach((user) => {
//     const newUser = document.createElement("div");

//     newUser.innerHTML = `<div class="parentDiv">
//     <img src="${user.image}">
//         <div class="detail">
//           <h3>${user.lastName} ${user.firstName}</h3>
//            <p>${user.email}</p>
//       </div>
//       </div>`;

//     usersElement.appendChild(newUser);
//   });
// }
// main();
