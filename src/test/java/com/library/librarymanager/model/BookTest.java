package com.library.librarymanager.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class BookTest {

    @Test
    public void givenBookDetailsShouldReturnCorrectValues() {
        // Using the parameterized constructor
        Book book = new Book("Clean Code", "Robert C. Martin", "9780132350884", "Programming", 10);

        // Verifying field values
        assertEquals("Clean Code", book.getTitle());
        assertEquals("Robert C. Martin", book.getAuthor());
        assertEquals("9780132350884", book.getIsbn());
        assertEquals("Programming", book.getCategory());
        assertEquals(10, book.getQuantity());
    }
}
