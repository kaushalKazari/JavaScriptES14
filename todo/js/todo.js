const inputTxt = document.getElementById('inputTxt');

const add = () =>{
    if(inputTxt.value == ''){
        alert('Please Enter Value');
    }else{
        var li = document.createElement('li');
        li.innerHTML = inputTxt.value;
        var button = document.createElement('button');
        button.setAttribute('class', 'btn btn-danger ms-2 pe-auto');
        button.innerHTML = 'Delete';
        li.appendChild(button);
        const ul = document.getElementById('ul');
        ul.appendChild(li);
        inputTxt.value = '';
        li.querySelector('.btn-danger').addEventListener('click', removeEl);
        function removeEl(){
            li.remove();
        }
    }
}