package br.com.caio.lojabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.caio.lojabackend.model.Book;
import br.com.caio.lojabackend.model.Electronic;
import br.com.caio.lojabackend.service.DiscountService;
import br.com.caio.lojabackend.visitor.HolidayDiscountVisitor;

@RestController
@RequestMapping("/api/discounts")
public class DiscountController {

    @Autowired
    private DiscountService discountService;

    @PostMapping("/book")
    public Book applyHolidayDiscountToBook(@RequestBody Book book){
        HolidayDiscountVisitor visitor = new HolidayDiscountVisitor();
        discountService.applyDiscount(book, visitor);
        return book;
    }

    @PostMapping("/electronic")
    public Electronic applyHolidayDiscountToElectronic(@RequestBody Electronic electronic) {
        HolidayDiscountVisitor visitor = new HolidayDiscountVisitor();
        discountService.applyDiscount(electronic, visitor);
        return electronic;
    }
}
