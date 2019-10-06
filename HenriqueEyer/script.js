add_event_click_on_btn_input(return_element_HTML_by_id('btn_input'));


function add_event_click_on_li_for_trace_item(element){
    element.addEventListener('click', function(){
        this.style.background="#DCDCDC";
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
    return element;
}

function create_element_li(){
    let item_li=document.createElement('li');
    return item_li;
}

function return_element_HTML_by_id(id){
    let element = document.getElementById(id);
    return element;
}
