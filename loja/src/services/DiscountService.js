import axios from 'axios';

const API_URL = 'http://localhost:8080/api/discounts';

class DiscountService {
  applyDiscountToBook(book) {
    return axios.post(`${API_URL}/book`, book);
  }

  applyDiscountToElectronic(electronic) {
    return axios.post(`${API_URL}/electronic`, electronic);
  }
}

export default new DiscountService();

