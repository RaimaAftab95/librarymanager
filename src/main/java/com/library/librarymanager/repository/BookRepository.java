package com.library.librarymanager.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.library.librarymanager.model.Book;

@Repository
public interface BookRepository extends MongoRepository<Book, String> {
}
