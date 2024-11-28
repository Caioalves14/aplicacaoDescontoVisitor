import React, { useState } from 'react';
import DiscountService from '../services/DiscountService';
import './BookDiscountForm.css';

function BookDiscountForm() {
  const [book, setBook] = useState({ title: '', author: '', price: 0 });
  const [discountedBook, setDiscountedBook] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await DiscountService.applyDiscountToBook(book);
    setDiscountedBook(response.data);
  };

  return (
    <div>
      <h2>Apply Holiday Discount to Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={book.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" name="author" value={book.author} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={book.price} onChange={handleChange} required />
        </div>
        <button type="submit">Apply Discount</button>
      </form>

      {discountedBook && (
        <div>
          <h3>Discounted Book:</h3>
          <p>Title: {discountedBook.title}</p>
          <p>Author: {discountedBook.author}</p>
          <p>Original Price: {book.price}</p>
          <p>Discounted Price: {discountedBook.price}</p>
        </div>
      )}
    </div>
  );
}

export default BookDiscountForm;
