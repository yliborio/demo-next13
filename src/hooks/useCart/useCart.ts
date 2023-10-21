"use client";

import { FakeAPIProduct } from "core/types/product";
import { CartItems } from "core/types/cartItem";
import { useContext } from "react";
import { LocalContext } from "core/contexts/localContext";
import currency from "currency.js";

export const useCart = () => {    

    const {cart, updateCart} = useContext(LocalContext);    
    const {items, total} = cart;


    const getCartProducts = async () => {

        const products = (await Promise.all(
            cart.items.map(async (item) => {
              const data = await fetch(`https://fakestoreapi.com/products/${item.id}`);
              const product = await data.json();
              const quantity = item.quantity;
              return { product, quantity };
            }))).sort((a,b) => a.product.id - b.product.id);
        
        return products;
    }

    const addProduct = (product : FakeAPIProduct) => {
        const storageProduct = items.find((item) => item.id === product.id );  
        if(storageProduct){            
            const newValue: CartItems =  { 
                items: [...items.filter((p) => p.id !== product.id ), {id: product.id, quantity: storageProduct.quantity + 1}],                
                total: currency(total).add(product.price)
            }
            updateCart(newValue)            
        }
        else{
            const newValue: CartItems =  { 
                items: [...items, {id: product.id, quantity: 1}],                
                total: currency(total).add(product.price)
            }
            updateCart(newValue)
        }
    }

    const removeProduct = (product : FakeAPIProduct) => {
        const storageProduct = items.find((item) => item.id === product.id );  
        if(storageProduct){            
            const newValue: CartItems =  { 
                items: [...items.filter((p) => p.id !== product.id )],
                total: currency(total).subtract(product.price * storageProduct.quantity)
            }
            updateCart(newValue)            
        }       
    }

    const removeQuantity = (product : FakeAPIProduct) => {        
        const storageProduct = items.find((item) => item.id === product.id ); 
        if (storageProduct?.quantity === 1) return removeProduct(product);
        if(storageProduct){            
            const newValue: CartItems =  { 
                items: [...items.filter((p) => p.id !== product.id ), {id: product.id, quantity: storageProduct.quantity - 1}],                
                total: currency(total).subtract(product.price)
            }
            updateCart(newValue)                   
        }       
    }


    return {cart, addProduct, getCartProducts, removeProduct, removeQuantity}
}