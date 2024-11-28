package br.com.caio.lojabackend.model;

import br.com.caio.lojabackend.visitor.DiscountVisitor;

public interface Visitable {
    void accept(DiscountVisitor visitor);
}
