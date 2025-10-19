//package com.library.librarymanager.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import com.library.librarymanager.model.Book;
//import com.library.librarymanager.repository.BookRepository;
//
//import java.util.List;
//
//@CrossOrigin(origins = "http://localhost:5173")
//@RestController
//@RequestMapping("/api/books")
//public class BookController {
//
//    @Autowired
//    private BookRepository bookRepository;
//
//    // Create a new book (POST)
//    @PostMapping
//    public Book createBook(@RequestBody Book book) {
//        return bookRepository.save(book);
//    }
//
//    // Get all books (GET)
//    @GetMapping
//    public List<Book> getAllBooks() {
//        return bookRepository.findAll();
//    }
//
//    // Get a book by ID (GET)
////    @GetMapping("/{id}")
////    public Book getBookById(@PathVariable String id) {
////        return bookRepository.findById(id)
////                .orElseThrow(() -> new RuntimeException("Book not found"));
////    }
//
//    // Get a book by ID (GET)
//    @GetMapping("/{id}")
//    public ResponseEntity<Object> getBookById(@PathVariable String id) {
//        return bookRepository.findById(id)
//                .map(book -> ResponseEntity.ok((Object) book))
//                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND)
//                        .body("Book not found"));
//    }
//
//
//    // Update a book (PUT)
////    @PutMapping("/{id}")
////    public Book updateBook(@PathVariable String id, @RequestBody Book bookDetails) {
////        Book book = bookRepository.findById(id)
////                .orElseThrow(() -> new RuntimeException("Book not found"));
////        book.setTitle(bookDetails.getTitle());
////        book.setAuthor(bookDetails.getAuthor());
////        return bookRepository.save(book);
////    }
//
//
//    // Update a book (PUT)
//    @PutMapping("/{id}")
//    public ResponseEntity<Book> updateBook(@PathVariable String id, @RequestBody Book bookDetails) {
//        Book book = bookRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("Book not found"));
//
//        // ✅ Update all relevant fields
//        book.setTitle(bookDetails.getTitle());
//        book.setAuthor(bookDetails.getAuthor());
//        book.setIsbn(bookDetails.getIsbn());
//        book.setCategory(bookDetails.getCategory());
//        book.setQuantity(bookDetails.getQuantity());
//
//        Book updatedBook = bookRepository.save(book);
//        return ResponseEntity.ok(updatedBook);
//    }
//
//
//    // Delete a book (DELETE)
//    @DeleteMapping("/{id}")
//    public String deleteBook(@PathVariable String id) {
//        bookRepository.deleteById(id);
//        return "Book deleted successfully";
//    }
//}





package com.library.librarymanager.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.library.librarymanager.model.Book;
import com.library.librarymanager.service.BookService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/books")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    // ✅ Create a new book
    @PostMapping
    public ResponseEntity<Book> createBook(@RequestBody Book book) {
        Book savedBook = bookService.saveBook(book);
        return new ResponseEntity<>(savedBook, HttpStatus.CREATED);
    }

    // ✅ Get all books
    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        List<Book> books = bookService.getAllBooks();
        return ResponseEntity.ok(books);
    }

    // ✅ Get a book by ID
    @GetMapping("/{id}")
    public ResponseEntity<Object> getBookById(@PathVariable String id) {
        Book book = bookService.getBookById(id);
        if (book != null) {
            return ResponseEntity.ok(book);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Book not found");
        }
    }

    // ✅ Update a book
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateBook(@PathVariable String id, @RequestBody Book bookDetails) {
        Book existingBook = bookService.getBookById(id);
        if (existingBook == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Book not found");
        }

        existingBook.setTitle(bookDetails.getTitle());
        existingBook.setAuthor(bookDetails.getAuthor());
        existingBook.setIsbn(bookDetails.getIsbn());
        existingBook.setCategory(bookDetails.getCategory());
        existingBook.setQuantity(bookDetails.getQuantity());

        Book updatedBook = bookService.saveBook(existingBook);
        return ResponseEntity.ok(updatedBook);
    }

    // ✅ Delete a book
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable String id) {
        Book existingBook = bookService.getBookById(id);
        if (existingBook == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Book not found");
        }
        bookService.deleteBook(id);
        return ResponseEntity.ok("Book deleted successfully");
    }
}
