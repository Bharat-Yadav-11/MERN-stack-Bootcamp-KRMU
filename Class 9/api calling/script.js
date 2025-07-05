async function apiData() {
  let resoponse = await fetch("https://dummyjson.com/users");
  let data = await resoponse.json();
  console.log(data.users);
  showData(data.users);
}

apiData();

const Names = document.querySelector("#Names");

function showData(users) {
  users.forEach((element) => {
    // ...................... element creating...............
    const card = document.createElement("div");
    const firstname = document.createElement("h1");
    const age = document.createElement("p");
    const image = document.createElement("img")

    

    // ...................... content adding...............

    firstname.textContent = 'Name : '+element.firstName;
    age.textContent = 'Age : '+element.age;
    image.setAttribute("src", `${element.image}`)


    // ...................... apending tag...............

    card.appendChild(image)
    card.appendChild(firstname);
    card.appendChild(age);
    Names.appendChild(card);

    //................... adding class for styling............................
    card.classList.add('card')
 
  });
}
