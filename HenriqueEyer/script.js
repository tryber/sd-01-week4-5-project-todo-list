add_event_click_on_btn_input(return_element_HTML_by_id('btn_input'));
add_event_click_on_btn_excluir(return_element_HTML_by_id('btn_excluir_ALL'))

function add_event_click_on_btn_excluir(btn){
    btn.addEventListener('click',function(){
       delete_all_item();
    })
}

function delete_all_item(){
    let list=return_list_by_tag_name('li');
    let size_list=list.length;
    let i;

    for(i=0;i<size_list;i++){
        delete_element(list[0]);
    }

}

function return_list_by_tag_name(name){
    let elements=document.getElementsByTagName(name);
    return elements;
}


function delete_element(element){
    element.parentNode.removeChild(element);
}

function add_event_click_on_li_for_mark_item_with_line(element){
    element.addEventListener('dblclick', function(){
        this.style.textDecoration="line-through";
        this.style.color="#808080"
    })
}

function add_event_click_on_li_for_trace_item(element){
    element.addEventListener('click', function(){
        this.style.background="#F8F8FF";
    })
}

function add_event_click_on_btn_input(element){
    element.addEventListener('click',function(){
        //SIM isso funciona linha
        //cria o li, e adiciona o texto nele e depois o coloca no ol.
        add_element_inside_ol(add_text_inside_item_li(create_element_li(),return_element_HTML_by_id('input_txt').value),return_element_HTML_by_id('ol_list'));
        
    })
}

function add_element_inside_ol(elementfilho,elementpai){
    elementpai.appendChild(elementfilho);
}

function add_text_inside_item_li(element,txt){
    element.innerHTML=txt;
    add_event_click_on_li_for_trace_item(element);
    add_event_click_on_li_for_mark_item_with_line(element);
    return element;
}

function create_element_li(){
    let item_li=document.createElement('li');
    return item_li;
}


function return_element_HTML_by_className(classname){
    let element = document.getElementsByTagName(classname);
    return element;
}

function return_element_HTML_by_id(id){
    let element = document.getElementById(id);
    return element;
}
