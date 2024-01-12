const config = {
    frontend:document.getElementById("frontend"),
    backend:document.getElementById("backend"),
    frontendJson:"json/frontend.json",
    backendJson:"json/backend.json"
}


getJson(config.frontendJson,config.frontend)
getJson(config.backendJson,config.backend)


function getJson(jsonFile,target){
    fetch(jsonFile)
        .then(response => response.json())
        .then(function(data){
            createPortfolio(data,target)
    })
}

function createPortfolio(data,target){
    for(let i=0; i < data.length; i++){
        let container = document.createElement("div")
        container.classList.add("p-3")
        container.innerHTML += 
        `
            <h3 class="bg-gray text-white text-center p-3">${data[i].id} : ${data[i].title}</h3>
            <p>使用言語: ${data[i].language}</p>
            <p>概要：${data[i].content}</p>
            <img src="${data[i].thumbnail}" class="img-fluid">
            <p><a href="${data[i].source}">Githubアカウントへ移動する</a></p>
        `;
        console.log(container)
        target.append(container)
    }
}




