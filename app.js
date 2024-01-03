const draggableText = document.getElementById('draggableText');

// undo functionality
let data = [];
let currentState = {
  fontSize: draggableText.style.fontSize,
  color: draggableText.style.color,
  fontFamily: draggableText.style.fontFamily
};

function storeState() {
  data.push({
    fontSize: currentState.fontSize,
    color: currentState.color,
    fontFamily: currentState.fontFamily
  });
}

function undo() {
  if (data.length > 0) {
    const prevState = data.pop();
    applyChanges(prevState);
  }
}


//Size change

function sizeFun(e){
    let value = e.value;
    draggableText.style.fontSize = value + "px";
  }
  
//Color change

  function colorFun(e){
      let value = e.value;
      draggableText.style.color = value;
  }
  
  //Font change

  function changeFontStyle(e){
      let value = e.value;
      draggableText.style.fontFamily = value;
  }
  
 


// draggable the text
  
let isDragging = false;
let offsetX, offsetY;

draggableText.addEventListener('mousedown', function(e) {
  isDragging = true;
  offsetX = e.clientX - parseInt(window.getComputedStyle(draggableText).left);
  offsetY = e.clientY - parseInt(window.getComputedStyle(draggableText).top);
});

document.addEventListener('mousemove', function(e) {
  if (isDragging) {
    draggableText.style.left = e.clientX - offsetX + 'px';
    draggableText.style.top = e.clientY - offsetY + 'px';
  }
});

document.addEventListener('mouseup', function() {
  isDragging = false;
});

