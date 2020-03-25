
function enviarmensagem(){
    let msg = document.getElementById('txtmsg')
    let mostrar = document.getElementById('mostrar')
    let item = document.createElement('p')

    if (msg.value.length == 0) {
        alert("O campo de texto está vazio!")
    }else{
        item.innerHTML = `${msg.value}`
        item.style.background = "#ccf2ff"
        //Sitem.style.width = "400px"
        item.style.borderRadius = "10px"
        item.style.padding = "10px"
        item.style.textAlign = "left"
        mostrar.appendChild(item)
        msg.value = ""
    }

}




