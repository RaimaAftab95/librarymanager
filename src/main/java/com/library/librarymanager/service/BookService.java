package com.library.librarymanager.service;

import com.library.librarymanager.model.Book;
import com.library.librarymanager.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.List;

@Service
public class BookService {
    private final BookRepository repository;

    public BookService(BookRepository repository) {
        this.repository = repository;
    }

    public List<Book> getAllBooks() {
        return repository.findAll();
    }

    public Book getBookById(String id) {
        Optional<Book> book = repository.findById(id);
        return book.orElse(null);
    }

    public Book saveBook(Book book) {
        return repository.save(book);
    }

    public void deleteBook(String id) {
        repository.deleteById(id);
    }
}
