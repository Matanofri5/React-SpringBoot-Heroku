import axios from 'axios'

const CUSTOEMRS_REST_API_URL = 'https://springboot-heruko.herokuapp.com/getAllCustomers';

class CustomerService{

    getCustomers(){
       return axios.get(CUSTOEMRS_REST_API_URL);
    }
}

export default new CustomerService();