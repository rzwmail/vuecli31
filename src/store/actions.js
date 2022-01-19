import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types"

export default {
    addCart(context, payload){
        return new Promise((resolve,reject)=>{
            if(!payload.count){
                payload.count = 1
            }
            for(let item of context.state.cartList){
                if (item.id === payload.id){
                 context.commit(ADD_COUNTER,item)
                    return resolve('当前商品数量加1')
                }
            }
            context.commit(ADD_TO_CART, payload)
            resolve('添加了新的商品')
        })
    } 
}