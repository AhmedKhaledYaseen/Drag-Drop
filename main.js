let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let boxes = document.querySelectorAll(".box");
let drag = null;

btn.onclick = function(){
    if(inp.value != ''){
        boxes[0].innerHTML += `<p class="item" draggable="true">${inp.value}</p>`;
        inp.value = '';
    }

    dragItem();
}

function dragItem(){
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('dragstart', e => {
            drag = item;
            item.style.opacity = '0.5';
        })

        item.addEventListener('dragend', e => {
            drag = null;
            item.style.opacity = '1';
        })

        boxes.forEach(box => {
            box.addEventListener('dragover', e => {
                e.preventDefault();
                box.style.background = '#090';
                box.style.color = '#000';
            })

            box.addEventListener('dragleave', e => {
                box.style.background = '#fff';
                box.style.color = '#000';
            })

            box.addEventListener('drop', e => {
                box.append(drag);
                box.style.background = '#fff';
                box.style.color = '#000';
            })
        })
    })
}