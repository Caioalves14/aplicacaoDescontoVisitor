package br.com.caio.lojabackend.service;

import org.springframework.stereotype.Service;

import br.com.caio.lojabackend.model.Book;
import br.com.caio.lojabackend.model.Electronic;
import br.com.caio.lojabackend.visitor.DiscountVisitor;

@Service
public class DiscountService {

    public void applyDiscount(Book book, DiscountVisitor visitor){
        book.accept(visitor);
    }

    public void applyDiscount(Electronic electronic, DiscountVisitor visitor){
        electronic.accept(visitor);
    }
}
