


function add_element_inside_ol(elementfilho,elementpai){
    elementpai.appendChild(elementfilho);
}

function add_txt_item_li(element,txt){
    element.innerHTML=txt;
}

function create_element_li(){
    let item_li=document.createElement('li');
    return item_li;
}

function return_element_HTML_by_id(id){
    let element = document.getElementById(id);
    return element;
}
