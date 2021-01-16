
let myLibrary = [];

let uniqueId = 0;

function Books(title, author, pages){
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = uniqueId;
}

const book1 = new Books("Rhythm of War", "Brandon Sanderson", 1098);

//get elements
const table1 = document.getElementById("table1");
const table2 = document.getElementById("table2");
const table3 = document.getElementById("table3");
const button_open = document.getElementById("button_open");
const button_close = document.getElementById("x_close");
const modal_container = document.getElementById("modal_container");
const form = document.getElementById("form");


// code to show form
button_open.addEventListener("click", ()=>{
    modal_container.classList.add("show");
})

// code to close form
button_close.addEventListener("click", ()=>{
    modal_container.classList.remove("show");
    form.reset();
})



// function that gets info when modal is submitted
function modal_submit(){

    // create buttons to switch and remove books
    const remove = document.createElement("button");
    remove.innerHTML = "remove";
    remove.classList.add("example_b")
    const remove2 = document.createElement("button");
    remove2.innerHTML = "remove";
    remove2.classList.add("example_b")
    const remove3 = document.createElement("button");
    remove3.innerHTML = "remove";
    remove3.classList.add("example_b")
    const change_to_read = document.createElement("button");
    change_to_read.innerHTML = "read";
    change_to_read.classList.add("example_b")
    const change_to_reading = document.createElement("button");
    change_to_reading.innerHTML = "reading";
    change_to_reading.classList.add("example_b")
    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;

    const read = document.getElementById("read");
    const reading = document.getElementById("reading");
    const want_to_read = document.getElementById("want_to_read");



    let book = new Books(title, author, pages);

    myLibrary.push(book);
    remove.value = uniqueId
    remove2.value = uniqueId
    remove3.value = uniqueId
    change_to_reading.value = uniqueId
    change_to_read.value = uniqueId
    uniqueId++;

    let number_of_books = myLibrary.length;
    var row;

    if (want_to_read.checked == true){
        row = table1.insertRow();
    }
    else if (reading.checked == true){
        row = table2.insertRow();
    }
    else if (read.checked == true){
        row = table3.insertRow();
    }
    
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    let cell4 = row.insertCell();
    cell1.innerHTML = myLibrary[number_of_books -1].title;
    cell2.innerHTML = myLibrary[number_of_books - 1].author;
    cell3.innerHTML = myLibrary[number_of_books - 1].pages + " pages";
    
    
    if (want_to_read.checked == true){
        cell4.appendChild(remove);
        cell4.appendChild(change_to_reading);
    }
    else if (reading.checked == true){
        cell4.appendChild(remove2);
        cell4.appendChild(change_to_read);
    }
    else if (read.checked == true){
        cell4.appendChild(remove3);
    }
    
    
    remove.addEventListener("click", function(e){
        for (let i = 0; i < myLibrary.length; i++){  
            if (myLibrary[i].id == remove.value){
                myLibrary.splice(i,1);
                table1.deleteRow(remove.parentNode.parentNode.rowIndex)
            }
        }
    })
    
    remove2.addEventListener("click", function(e){
        for (let i = 0; i < myLibrary.length; i++){  
            if (myLibrary[i].id == remove2.value){
                myLibrary.splice(i,1);
                table2.deleteRow(remove2.parentNode.parentNode.rowIndex)
            }
        }
    })

    remove3.addEventListener("click", function(e){
        for (let i = 0; i < myLibrary.length; i++){  
            if (myLibrary[i].id == remove3.value){
                myLibrary.splice(i,1);
                table3.deleteRow(remove3.parentNode.parentNode.rowIndex)
            }
        }
    })

    change_to_reading.addEventListener("click", function(e){
        table1.deleteRow(change_to_reading.parentNode.parentNode.rowIndex);
        row = table2.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        let cell4 = row.insertCell();

        for (let i = 0; i < myLibrary.length; i++){
            if (myLibrary[i].id == change_to_reading.value){
                cell1.innerHTML = myLibrary[i].title;
                cell2.innerHTML = myLibrary[i].author;
                cell3.innerHTML = myLibrary[i].pages + " pages";
            }
        }
        cell4.appendChild(remove2);
        cell4.appendChild(change_to_read);
    })

    change_to_read.addEventListener("click", function(e){
        table2.deleteRow(change_to_read.parentNode.parentNode.rowIndex);
        row = table3.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        let cell4 = row.insertCell();

        for (let i = 0; i < myLibrary.length; i++){
            if (myLibrary[i].id == change_to_read.value){
                cell1.innerHTML = myLibrary[i].title;
                cell2.innerHTML = myLibrary[i].author;
                cell3.innerHTML = myLibrary[i].pages + " pages";
            }
        }
        cell4.appendChild(remove3);
    })

    modal_container.classList.remove("show");
    form.reset()
}



