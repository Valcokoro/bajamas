import products from '../apis/products';
import {FETCH_PRODUCTS, OTHER_PRODUCTS1} from './types';


        
        
 export const fetchProducts = () => async dispatch => {
        
            const response = await products.get('/products');
            
            dispatch ({ type: FETCH_PRODUCTS, payload: response.data});
 };

 