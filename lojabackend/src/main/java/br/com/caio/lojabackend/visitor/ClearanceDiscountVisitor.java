package br.com.caio.lojabackend.visitor;

import br.com.caio.lojabackend.model.Book;
import br.com.caio.lojabackend.model.Electronic;

public class ClearanceDiscountVisitor implements DiscountVisitor{
    @Override
    public void applyDiscount(Book book){
        double discount = book.getPrice() *0.30; //30% de desconto
        book.setPrice(book.getPrice() - discount);
    }

    @Override
    public void applyDiscount(Electronic electronic) {
        double discount = electronic.getPrice() * 0.50;
        electronic.setPrice(electronic.getPrice() - discount);
    }
}
