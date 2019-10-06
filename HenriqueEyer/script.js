add_event_click_on_btn_input(return_element_HTML_by_id('btn_input'));

function add_event_click_on_btn_input(element){
    element.addEventListener('click',function(){
        let li=create_element_li();
        let text=return_element_HTML_by_id('input_txt');
        add_text_inside_item_li(li,text.value);
        add_element_inside_ol(li,return_element_HTML_by_id('ol_list'));
    })
}

function add_element_inside_ol(elementfilho,elementpai){
    elementpai.appendChild(elementfilho);
}

function add_text_inside_item_li(element,txt){
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
