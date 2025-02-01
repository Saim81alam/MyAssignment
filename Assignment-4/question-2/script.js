const divContainer = document.getElementById('div-container');

function createNewDiv(width,height,text) { 
    const newDiv = document.createElement('div')
   
    newDiv.style.width = width+"px";
    newDiv.style.height = height+"px";
    newDiv.style.backgroundColor = 'green';
    newDiv.innerText = text;

    divContainer.appendChild(newDiv)
}

window.createNewDiv = createNewDiv(200,200,'new Div')