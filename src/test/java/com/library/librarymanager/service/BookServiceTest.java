package com.library.librarymanager.service;

import com.library.librarymanager.model.Book;
import com.library.librarymanager.repository.BookRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class BookServiceTest {

    private BookRepository repository;
    private BookService service;
    private Book book;

    @BeforeEach
    void setup() {
        repository = Mockito.mock(BookRepository.class);
        service = new BookService(repository);

        book = new Book("Clean Code", "Robert C. Martin", "9780132350884", "Programming", 10);
        book.setId("1"); // Set ID manually since it’s not in the constructor
    }

    @Test
    void testGetBookById() {
        when(repository.findById("1")).thenReturn(Optional.of(book));

        Book result = service.getBookById("1");

        assertEquals("Clean Code", result.getTitle());
        assertEquals("Robert C. Martin", result.getAuthor());
        assertEquals("Programming", result.getCategory());
    }
}
