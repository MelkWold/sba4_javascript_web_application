import axios from "axios";

export async function bookInfoImporter(author) { 
    
    try {
        const books = await axios.get(`https://openlibrary.org/search.json?q=${author}`);
        const booksJson = books.data
        const bookData = booksJson.docs;
   
        let booksByAuthor = [];
        bookData.forEach(book => {
            if (book.author_name[0].toLowerCase() === author.toLowerCase()){
                booksByAuthor.push({
                    "author name": book.author_name[0],
                    "title": book.title,
                    "year": book.first_publish_year,
                    "author key": book.author_key[0],
                    "cover image": book.cover_i,
                });  
            }
        }); 
        
        return booksByAuthor;

    } catch(err) {
        console.error(`Error: ${err.message}`);
    }  
}