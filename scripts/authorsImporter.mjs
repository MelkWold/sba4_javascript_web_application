export async function authorImporter() { 
    
    try {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${author}`);
        const data = response.data;
        const bookData = data.docs;
        let booksByAuthor = [];
        bookData.forEach(book => {
            if (book.author_name[0].toLowerCase() === author.toLowerCase()){
                booksByAuthor.push({
                    "author_name": book.author_name[0],
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
        return [];
    }  
}
