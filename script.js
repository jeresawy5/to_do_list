const input_Feild = {
    item: undefined,
    add: document.getElementById('add'),
    clear_Input: document.getElementById('clear_Input'),
}

const list = {
    item: undefined,
    done: document.getElementById('done'),
    clear_Item: document.getElementById('clear_Item'),
}

add.addEventListener('click', function  ()  {
    input_Feild.item = document.getElementById('to_Do').value;
    //console.log(input_Feild.item);
});

clear_Input.addEventListener('click', function(){
    input_Feild.item = undefined;
    //console.log(input_Feild.item)
});
