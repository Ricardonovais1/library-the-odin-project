;(function(){
    'use strict'

    const booksContainer = document.querySelector('.books-container');
    const addBook = document.querySelector('.add-book');
    const modal = document.querySelector('.modal');
    const popupWraper = document.querySelector('.popup-wrapper');
    const submitNewBook = document.querySelector('.submit-new-book');
    const bookName = document.querySelector('.book-name');
    const bookAuthor = document.querySelector('.book-author');
    const bookPages = document.querySelector('.book-pages');
    
   
    // Desclare empty array
    let myLibrary = [];

    
    //Object constructor
    function Book (title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
    }

    
    //Add book to array of books    
    function addBookToLibrary(title, author, pages, read) {
        let book = new Book(title, author, pages, read)
        return myLibrary.push(book)
    }
    
    //abrir modal
   
    addBook.addEventListener('click', () => {
        popupWraper.style.display = 'block'    
        bookName.value = ''
        bookAuthor.value = ''
        bookPages.value = ''
    });
    
    //fechar modal - Post book
    popupWraper.addEventListener('click', (e) => {
        const classListOfCliquedElements = e.target.classList[0];
        const classNames = ['submit-new-book', 'popup-wrapper', 'modal-close'];
        const shouldClosePopup = classNames.some(className => className === classListOfCliquedElements);

        if (shouldClosePopup) {
            popupWraper.style.display = 'none';
        }
    });   

    function displayBooksOnPage() {
            const bookDiv = document.createElement('div');
            bookDiv.className = 'each-book';
            booksContainer.appendChild(bookDiv);
    
            const bookName_div = document.createElement('p');
            bookName_div.className = 'book-name-div';
            bookName_div.setAttribute('style', 'color: #fff; font-weight: 900');            
            bookName_div.textContent = 'Livro: ' + bookName.value;
            bookDiv.appendChild(bookName_div);
    
            const bookAuthor_div = document.createElement('p');
            bookAuthor_div.className = 'book-author-div';
            bookAuthor_div.setAttribute('style', 'color: #fff; font-weight: 900');
            bookAuthor_div.textContent = 'Autor: ' + bookAuthor.value;
            bookDiv.appendChild(bookAuthor_div);
    
            const bookPages_div = document.createElement('p');
            bookPages_div.className = 'book-name-div';
            bookPages_div.setAttribute('style', 'color: #fff; font-weight: 900');
            bookPages_div.textContent = 'Páginas: ' + bookPages.value;
            bookDiv.appendChild(bookPages_div);   

            const readCheck_div = document.createElement('div');
            readCheck_div.className = 'read-check-div';
            readCheck_div.setAttribute('style', 'display: flex; align-items: center; gap: 0.5rem; margin-top: 00.5rem');
            bookDiv.appendChild(readCheck_div);

            const readNotReadButton = document.createElement('input');
            readNotReadButton.type = 'checkbox';
            readNotReadButton.className = 'checkbox';
            readCheck_div.appendChild(readNotReadButton);  

            const readNotReadText = document.createElement('p');
            readNotReadText.className = 'read-text';
            readNotReadText.textContent = 'Não lido';
            readNotReadText.setAttribute('style', 'align-self: center; flex: 1; color: white');
            readCheck_div.appendChild(readNotReadText);

            const editBook = document.createElement('img');
            editBook.className = 'edit-book';
            editBook.setAttribute('style', 'align-self: center; max-width: 1rem; cursor: pointer');
            editBook.setAttribute('src', './img/edit.png');
            readCheck_div.appendChild(editBook)

            const deleteBook = document.createElement('img');
            deleteBook.className = 'delete-book2';
            deleteBook.setAttribute('style', 'align-self: center; max-width: 1rem; cursor: pointer');
            deleteBook.setAttribute('src', './img/trash.png');
            readCheck_div.appendChild(deleteBook);

            
                deleteBook.addEventListener('click', function(e) {
                    e.stopImmediatePropagation()
                    e.path[2].remove()                 
                });    


                readNotReadButton.addEventListener('change', function() {
                    bookDiv.classList.toggle('each-book2');
                    bookDiv.classList.toggle('each-book');
                    console.log(readNotReadButton.checked)

                    readNotReadButton.checked
                    ? readNotReadText.textContent = 'Lido' 
                    : readNotReadText.textContent = 'Não lido'
                })                
    }

          
        submitNewBook.addEventListener('click', (e) => {
            e.preventDefault()
            
            if (!bookName.value || !bookAuthor.value || !bookPages.value) {
                alert ("Preencha todos os dados para adicionar um novo livro ")
            }

            addBookToLibrary(bookName.value, bookAuthor.value, bookPages.value)            

            displayBooksOnPage()


        });   
    

})()
