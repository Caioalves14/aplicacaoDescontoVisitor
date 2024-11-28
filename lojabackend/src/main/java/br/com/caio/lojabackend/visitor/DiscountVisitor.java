package br.com.caio.lojabackend.visitor;

import br.com.caio.lojabackend.model.Book;
import br.com.caio.lojabackend.model.Electronic;

public interface DiscountVisitor {

    void applyDiscount(Book book);
    void applyDiscount(Electronic electronic);
}
