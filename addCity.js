function addItem(cityName, image, content) { 
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
            <img src="${image}" alt="${cityName}" />
            <div>${content}</div>
        `;
    document.querySelector("#container").appendChild(div);

    const span = document.createElement("span");
    span.innerHTML = `✏️${cityName}`;
    document.querySelector("#sidebar").appendChild(span);
}

//이걸로 하면 좋겠다 근데 안됨document.querySelector("#sidebar").before(button);
// 12번 줄 document.querySelector("#sidebar").append(span);

function addCityHandle(event){
    event.preventDefault();
    const cityName = document.getElementById("cityName").value;
    const image = document.getElementById("image").value;
    const content = document.getElementById("content").value;
    addItem(cityName, image, content);
    closeModal();
}


document.getElementById("addItemForm").addEventListener("submit", addCityHandle);