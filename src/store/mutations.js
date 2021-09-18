import {
  ADD_COUNTER,
  ADD_TO_CART,
  Change_Check,
  AllCheck
}from './mutations-types'

export default {
  // mutations唯一的目的就是修改state中状态
  // mutations中的每个方法尽可能完成的事件比较单一一点
  [ADD_COUNTER](state,payload){
    payload.count++
  },
  [ADD_TO_CART](state,payload){
    payload.check = true
    state.cartList.push(payload)
  },
  [Change_Check](state,payload){
    let product = state.cartList.find(item => item.iid === payload.iid)
    product.check = !product.check
  },
  [AllCheck](state,payload){
    let check = false;
    for(let item of state.cartList){
      if(!item.check){
        check = true
        break;
      }
    }

    for(let item of state.cartList){
      item.check = check
    }
  }
}