import { combineReducers } from "redux";
import _ from 'lodash';
import {
    CREATE_PRODUCT,
    FETCH_PRODUCTS,
    FETCH_PRODUCT} from '../actions/types';


const productReducer = (products=[], action) =>{
   if(action.type === FETCH_PRODUCTS){
    return  [...products, ...action.payload]
   }

   return products;
}


export default combineReducers({
    products: productReducer,
   

});