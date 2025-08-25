
async function bookImport(author) { 
    let author_name = author;
    const books = await axios.get(`https://openlibrary.org/search.json?q=${author_name}`);
    const bookData = books.data.docs;
    console.log(books.data)
    
    if(books.data.docs.ebook_access === "public" && books.data.docs.has_fulltext === true) {
        const publicFullText = books.data.docs;
        console.log(publicFullText);
         }
        // const title = books.data.docs.title;
        // const author = books.data.docs.author_name;
        // const ebookAccess = books.data.docs.author_name;
        //const publicationYear = books.data.docs.first_publish_year;
        //const coverId = books.data.docs.cover_i;
    // }
}

bookImport("Dan Brown");

