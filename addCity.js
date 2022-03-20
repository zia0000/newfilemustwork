function addItem(cityName ,image, content) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
            <img src="${image}" alt="${city}" />
            <span>${content}</span>
        `;
    document.querySelector("#container").appendChild(div);

    const span = document.createElement("span");
    span.innerHTML = cityName;
    document.querySelector("#sidebar").appendChild(span);
}

function addHandle(e){
    e.preventDefault();
    const cityName = document.querySelector(#cityName).value;
    const image = document.querySelector(#image).value;
    const content = document.querySelector(#content).value;
    addItem(cityName, image, content);
    closeModal();
}

document.getElementById("addItemForm").addEventListener("submit", addItemHandle)
