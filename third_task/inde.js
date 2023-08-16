const shape = document.getElementById("shapeselector");
const color = document.getElementById("colorselector");
const create = document.getElementById("formshape");
const shapeContainer = document.getElementById("shapeContainer");

shape.addEventListener("change",shape())
 function shape() {
    const selectorShape = shape.value;
    if (selectorShape === "circle") {
        shapeContainer.style.borderRadius = "50%";
    } else if (selectorShape === "square") {
        shapeContainer.style.width = "100px";
        shapeContainer.style.height = "100px";
        shapeContainer.style.borderRadius = "0";
    } else {
        shapeContainer.style.borderLeft = "50px solid transparent";
        shapeContainer.style.borderRight = "50px solid transparent";
        shapeContainer.style.borderBottom = "100px solid";
        shapeContainer.style.borderRadius = "0";
    }
    
}

color.addEventListener("change",color()); 
function color () {
    const selectorColor = color.value;
    shapeContainer.style.backgroundColor = selectorColor;
}
create.addEventListener("click", create());
function create(event) {
    event.preventDefault();
    shapeContainer.innerHTML = "";
    document.getElementById("shapeContainer").innerHTML="dfdddfsfdsfddfsf";
    //const newShape = document.createElement("div");
    //newShape.className = "shape";
    //shapeContainer.appendChild(newShape);
}