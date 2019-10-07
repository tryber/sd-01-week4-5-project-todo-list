reload_list();
add_event_click_on_btn_input(return_element_HTML_by_id('btn_input'));
add_event_click_on_btn_excluir(return_element_HTML_by_id('btn_excluir_ALL'))
add_event_click_on_btn_excluir_item(return_element_HTML_by_id('btn_excluir_item'))
add_event_click_on_btn_excluir_completos(return_element_HTML_by_id('btn_excluir_completos'))
add_event_btn_salvar(return_element_HTML_by_id('btn_salvar'))
add_event_btn_down(return_element_HTML_by_id('btn_down'))
add_event_btn_up(return_element_HTML_by_id('btn_up'))


function add_event_btn_up(element){
    element.addEventListener('click',function(){
        move_up_item(return_element_HTML_by_id('select'))
    })
}

function add_event_btn_down(element){
    element.addEventListener('click',function(){
        move_down_item(return_element_HTML_by_id('select'))
    })
}



function move_up_item(element){
    if(element){
        let item_pai=element.parentNode;
        item_pai.insertBefore(element,element.previousElementSibling);
    }
}

function move_down_item(element){
    if(element){
        let item_pai=element.parentNode;
        if(element==item_pai.lastChild){
            item_pai.insertBefore(element,item_pai.firstElementChild); 
        }else{
            item_pai.insertBefore(element.nextElementSibling,element); 
        }
    }
}



function save_list(){
    localStorage.clear();
    let list = return_list_by_tag_name('li') 
    let i;
    let text;
    for (i=0;i<list.length;i++){
        if(list[i].textContent!=""){
            localStorage.setItem('list'+i,list[i].textContent);
        }
    }
}

function reload_list(){
    let i;
    for(i=0;i<localStorage.length;i++){
        let text=localStorage["list"+i];
        add_element_inside_ol(add_text_inside_item_li(create_element_li(),text),return_element_HTML_by_id('ol_list'));
    }
}

function add_event_btn_salvar(btn){
    btn.addEventListener('click' , function (){
        save_list();
        
    })
}


function add_event_click_on_btn_excluir_completos(btn){
    btn.addEventListener('click', function(){
        delete_all_completed_item();
    })
}

function add_event_click_on_btn_excluir(btn){
    btn.addEventListener('click', function(){
        delete_all_item();
    })
}

function add_event_click_on_btn_excluir_item(btn){
    btn.addEventListener('click', function(){
        delete_element(return_element_HTML_by_id('select'))
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

function delete_all_completed_item(){
    let list=return_list_by_class_name('completed');
    let size_list=list.length;
    let i;
    for(i=0;i<size_list;i++){
        delete_element(list[0]);
    }
    
}

function return_list_by_class_name(name){
    let elements=document.getElementsByClassName(name);
    return elements;
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
        mark_li_double_click(this)
    })
}

function mark_li_double_click(element){
    if(element.className!="completed"){
        element.className="completed"
    }else{
        element.className="";
    }
}

function remove_attriubute_background_and_id_all_li(){
    let list=return_list_by_tag_name('li');
    let size_list=list.length;
    let i;
    for(i=0;i<size_list;i++){
        list[i].style.background="";
        list[i].removeAttribute("id");
    }
}

function add_event_click_on_li_for_trace_item(element){
    element.addEventListener('click', function(){
        remove_attriubute_background_and_id_all_li();
        this.id="select";
        this.style.background="#A9A9A9";
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
