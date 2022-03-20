function addCity(cityName ,image, content) {
    const div = document.createElement("div");
    div.classList.add("container");
    div.innerHTML = `
            <img src="${image}" alt="${city}" />
            <p>${content}</p>
        `;
    document.querySelector("#contains").appendChild(div);

    const sideSpan = document.createElement("sideSpan");
    sideSpan.innerHTML = cityName;
    document.querySelector("#sidebar").appendChild(sideSpan);
}

function addHandle(event){
    event.preventDefault();
    const cityName = document.querySelector(#cityName).value;
    const image = document.querySelector(#image).value;
    const content = document.querySelector(#content).value;
    addItem(cityName, image, content);
    closeModal();
}

document.querySelector(#addCityForm).addEventListener("submit", addHandle)
