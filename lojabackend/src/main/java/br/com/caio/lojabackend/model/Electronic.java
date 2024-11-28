package br.com.caio.lojabackend.model;

import br.com.caio.lojabackend.visitor.DiscountVisitor;

public class Electronic implements Visitable{

    private Long id;
    private String brand;
    private String Model;
    private double price;

    
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
    public void accept(DiscountVisitor visitor) {
        visitor.applyDiscount(this);
    }
    public String getBrand() {
        return brand;
    }
    public void setBrand(String brand) {
        this.brand = brand;
    }
    public String getModel() {
        return Model;
    }
    public void setModel(String model) {
        Model = model;
    }
}
