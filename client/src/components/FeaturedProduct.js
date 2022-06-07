import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions';
import logo from '../resources/logo.svg';
import cart from '../resources/cart.svg';
import line from '../resources/line.svg';
import tag from '../resources/tag.svg';



class FeaturedProduct extends React.Component{
    componentDidMount(){
        this.props.fetchProducts();
    }
    renderList(){
        return this.props.products.map(product => {
            return (
                <div className='item' key={product.id}>
                   <img src={product.image} alt={product.name}  className='product-image'/>
                   <img src={tag} alt='tag' className='photo-tag' />
                   <h4 className='photo-dday'>Photo of the day</h4>
                   <div className='product-name'>
                      {product.name}
                      <button className='add-product'>ADD TO CART</button>
                   </div>
                    <h4 className='about'>About the Samurai King Resting</h4>
                    <h4 className='recommendation'>People also buy</h4>
                   <div className='category'>
                       {product.category}
                   </div>
                   <div className='description'>
                       {product.description}
                   </div>
                   <div>
                   <img src={product.recommendation1} alt='recommendation1'  className='recommendation1'/>
                   <img src={product.recommendation2} alt='recommendation2'  className='recommendation2'/>
                   <img src={product.recommendation3} alt='recommendation3'  className='recommendation3'/>
                   <h4 className='details'>Details</h4>
                   <h5 className='dimension'>Size: 1020 x 1020 pixel</h5>
                   <h5 className='size'>Size: 15 mb</h5>
                   </div>


                </div>
            );
        });
    }


 render(){
     console.log(this.props.products);
   return (
       <section>
           <header>
           <img src={logo} alt='logo' className='logo' />
           <img src={cart} alt='cart' className='cart' />
           <img src={line} alt='line' className='line' />
           </header>
           <div>{this.renderList()}</div>
       </section>
       
   )
   }
}


const mapStateToProps = (state) =>{

    return {products: state.products }
}

export default connect(mapStateToProps,{fetchProducts})(FeaturedProduct);