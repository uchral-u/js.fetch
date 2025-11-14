const main = async () => {
  const containerElement = document.getElementById("container");
  const response = await fetch("https://dummyjson.com/users");
  const { users } = await response.json();
  console.log(users);
  users.forEach((user) => {
    const newElement = document.createElement("div");
    newElement.classList.add(
      "bg-[darkorange]",
      "flex",
      "gap-2",
      "rounded-lg",
      "p-2",
      "hover:bg-red-200"
    );
    newElement.innerHTML = `<img src="${user.image}" class="w-10 h-10 rounded-full border-[2px] border-white"> <div>
    <span class="font-bold text-[20px]">${user.firstName + " " + user.lastName} </span>
    <span>${user.email}</span>
    </div>`;
    containerElement.appendChild(newElement);
  });
};

main();

 
