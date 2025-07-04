async function apiData(){
    let resoponse = await fetch('https://dummyjson.com/users')
    let data = await resoponse.json()
    console.log(data.users)

    showData(data.users)

}

apiData()

const Names = document.querySelector("#Names")


function showData(users){
    users.forEach(element => {
        const firstname = document.createElement('h1')
        firstname.textContent = element.firstName
        console.log(firstname)
        Names.appendChild(firstname)
    
        // console.log(element.firstName)
    });
}