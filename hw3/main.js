var boxes = document.getElementsByClassName("box");
color = true;
for(let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = () => {
        if(boxes[i].style.backgroundColor == "" ){
            if(color === true) {
                color = false;
                boxes[i].style.backgroundColor = "yellow";
            }
            else {
                color = true;
                boxes[i].style.backgroundColor = "blue" ;
            }
        }
    }
}