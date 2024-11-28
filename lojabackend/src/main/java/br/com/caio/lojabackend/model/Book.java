package br.com.caio.lojabackend.model;

import br.com.caio.lojabackend.visitor.DiscountVisitor;

public class Book implements Visitable{
    
    private Long id;
    private String title;
    private double price;
    private String author;

    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
   
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public void accept(DiscountVisitor visitor){
        visitor.applyDiscount(this);
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getAuthor() {
        return author;
    }
    public void setAuthor(String autor) {
        this.author = autor;
    }
}
