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

async function main() {
    const usersElement = document.getElementById("users")
    const response = await fetch ("https://dummyjson.com/users")
    const data = await response.json()
    users.forEach(user => {
        const newUser = document.createElement("div")
        newUser.innerHTML = `<div class="parentDiv"> 
        <img src="${user.image}">
        <div class="detail">
        <h3>${user.lastname} ${user.firstname}</h3>
        <p>${user.email}</p>
        </div>
        </div>`
        usersElement.appendChild(newUser)

    });  
main()
}

// const colorList = document.getElementById("colors");
// const colors = ["red", "green", "orange", "cyan", "purple", "pink"];

// colors.forEach((color) => {
//   const newColor = document.createElement("li");
//   newColor.innerHTML = `<p style="color: ${color}">${color}</p>`;
//   newColor.classList.add();
//   colorList.appendChild(newColor);
// });

// <!-- <div class="usr">
//         <div class="img">
//           <img src=" https://dummyjson.com/icon/gabriela/128" alt="" />
//         </div>
//         <div class="detail">
//           <h3>Gabriel Adams</h3>
//           <p>gabriel.adams@x.dummyjson.com</p>
//         </div>
//     </div> -->
