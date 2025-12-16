let add = document.querySelector('#btn')
let input = document.querySelector('#ip')
let task_box = document.querySelector('#task-box')

add.addEventListener('click',()=>{
    if(input.value.trim() !== "") {
        console.log('hi')
        task_box.style.display = 'block'

        let newdiv = document.createElement('div');
        newdiv.classList.add('tsk');

        // text container
        let textDiv = document.createElement('div');
        textDiv.classList.add('text-tsk');

        let p = document.createElement('p');
        p.innerText = input.value;

        textDiv.appendChild(p);

        let delBtn = document.createElement('button');
        delBtn.classList.add('btn-del');
        delBtn.innerText = "Delete";

        delBtn.addEventListener('click',()=>{
            newdiv.remove()
        })

        newdiv.appendChild(textDiv);
        newdiv.appendChild(delBtn);
        task_box.appendChild(newdiv);

        input.value = ""; // clear input
    }
    else 
        alert("Add The Task Please")

})