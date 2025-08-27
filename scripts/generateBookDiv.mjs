
export function generateBookDiv(data) {
    let mainBody = document.getElementById("body");
    let bookContainer = document.getElementById("container");
    
    // clear old content
    bookContainer.innerHTML = "";

    // make sure that the container is inside body
    if (!mainBody.contains(bookContainer)){
        mainBody.appendChild(bookContainer);
    }

    data.forEach(book => {
    //create a div element
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.style.border = "1px solid blue";
    bookDiv.style.justifyContent = "center";
    bookDiv.style.textAlign= "center";
    bookDiv.style.width ="700px";
    

    //create a title element and populate it
    let title = document.createElement("h2");
    title.textContent = book.title;

    //create author element and populate it
    let author = document.createElement("h4");
    author.textContent = book.author;

    //create a p element and populate it
    let year = document.createElement("p");
    year.textContent = book.year;

    // create an image element and populate it
    // let cover = document.createElement(img);
    // cover.src = "";
    // cover.alt ="book.title"

    //append the contents to the div
    bookDiv.append(title, author, year);
    
    bookContainer.appendChild(bookDiv);
    bookContainer.style.textAlign = "center";

    mainBody.appendChild(bookContainer);

    });
}
