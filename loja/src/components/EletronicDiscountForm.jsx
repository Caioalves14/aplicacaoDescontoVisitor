import React, { useState } from 'react';
import DiscountService from '../services/DiscountService';
import './EletronicDiscountForm.css'

function ElectronicDiscountForm() {
  const [electronic, setElectronic] = useState({ brand: '', model: '', price: 0 });
  const [discountedElectronic, setDiscountedElectronic] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setElectronic({ ...electronic, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await DiscountService.applyDiscountToElectronic(electronic);
    setDiscountedElectronic(response.data);
  };

  return (
    <div className='div'>
      <h2>Aplicar Desconto Especial em eletrónicos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Brand:</label>
          <input type="text" name="brand" value={electronic.brand} onChange={handleChange} required />
        </div>
        <div>
          <label>Model:</label>
          <input type="text" name="model" value={electronic.model} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={electronic.price} onChange={handleChange} required />
        </div>
        <button type="submit">Aplicar Desconto</button>
      </form>

      {discountedElectronic && (
        <div>
          <h3>Discounted Electronic:</h3>
          <p>Brand: {discountedElectronic.brand}</p>
          <p>Model: {discountedElectronic.model}</p>
          <p>Original Price: {electronic.price}</p>
          <p>Discounted Price: {discountedElectronic.price}</p>
        </div>
      )}
    </div>
  );
}

export default ElectronicDiscountForm;
