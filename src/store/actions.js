import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types"

export default {
    addCart(context, payload){
        console.log(1234)
        if(!payload.count){
            payload.count = 1
        }
        for(let item of context.state.cartList){
            if (item.id === payload.id){
             return context.commit(ADD_COUNTER,item)
            }
        }
        context.commit(ADD_TO_CART, payload)
    } 
}