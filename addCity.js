function addCity(cityName, image, content) { //add city
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
            <img src="${image}" alt="${cityName}" />
            <span>${content}</span>
        `;
    document.querySelector("#container").appendChild(div);

    const span = document.createElement("span");
    span.innerHTML = cityName;
    document.querySelector("#sidebar").appendChild(span);
}

function addCityHandle(event){
    event.preventDefault();
    const cityName = document.getElementById("cityName").value;
    const image = document.getElementById("image").value;
    const content = document.getElementById("content").value;
    addCity(cityName, image, content); //addItem
    closeModal();
}


document.getElementById("addCityForm").addEventListener("submit", addCityHandle); //Iten>City