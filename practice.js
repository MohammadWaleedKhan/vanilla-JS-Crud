let arrObj = []
var flags = false;
let updateItem = 0;
function addTodo(){
    if(flags == false){
        addNewTodo()
    }else{
        updateTodo()
        flags = false
    }
}

function addNewTodo(){
    var writeText = document.getElementById("writeText").value;

    arrObj.push(writeText);
    
    document.getElementById("writeText").value = "";
    renderItems()
}

function renderItems(){
    document.getElementById("renderCard").style.display = 'block'
    var htmlRender = ''
    for(var a = 0; a < arrObj.length; a++){
        htmlRender += `<tr id="${a}">
        <td class="textLeft" id="items_${a}">${arrObj[a]}</td>
        <td> &nbsp;</td>
        <td> &nbsp;</td>
        <td><span onclick="editItem(${a}, items_${a})"><i class="fa-solid fa-pen-to-square"></i></span></td>
        <td><span onclick="deleteItem(${a}, items_${a})"><i class="fa-solid fa-trash"></i></span></td>
        </tr>`
    }

    document.getElementById("renderText").innerHTML = htmlRender;
    
}

function editItem(id, index){
    console.log(index.id);
    console.log(document.getElementById(`${index.id}`).innerHTML, "onlyId");

    for(var i = 0; i < arrObj.length; i++){
        if(i == id){
            
            document.getElementById("writeText").value = arrObj[id];
            console.log(arrObj.id, "ppp");
            updateItem = index;
        }
    }
    flags = true;
}

function updateTodo(){
    var writeText = document.getElementById("writeText").value;

    
    console.log(updateItem, "1_xxx");
    for(var i = 0; i<arrObj.length; i++){
        debugger
        if(`items_${i}` == updateItem.id)
        arrObj[i] = writeText
    }
    updateItem.innerHTML = writeText
    
    document.getElementById("writeText").value = "";
}

function deleteItem(id, index){
    console.log(index, "xxx");
    debugger
    for(var i = 0; i < arrObj.length; i++){
        if(i <= id){
            if(i > -1){
                arrObj.splice(id, 1);
                index.parentElement.remove()
            }
        }
    }
}