let count = 0
let saveMessageEl = document.getElementById("save-el")
let counter = document.getElementById("counter")
document.getElementById("increment-btn").addEventListener("click", increment);

document.getElementById("save-btn").addEventListener("click", save);



function increment() {
    count+=1
    counter.textContent = count    
}


function save() {
    let previous = +count+" - "
    saveMessageEl.textContent+=previous
    count=0
    counter.textContent = count

}



