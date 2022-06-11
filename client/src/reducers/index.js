import { combineReducers } from "redux";
import {FETCH_PRODUCTS} from '../actions/types';



const productReducer = (products=[], action) =>{
   if(action.type === FETCH_PRODUCTS){
    return  [...products, ...action.payload]
   }
    return products;
}



 

export default combineReducers({
    products: productReducer,

});