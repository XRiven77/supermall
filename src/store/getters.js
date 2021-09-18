export default {
  cartLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  },
  getTotal(state) {
    let total = 0;
    for (let item of state.cartList) {
      if (item.check) {
        total += item.price * item.count
      }
    }
    return total;
  },
  getCount(state) {
    let count = 0;
    for (let item of state.cartList) {
      if (item.check) {
        count++
      }
    }
    return count;
  },
  getAllCheck(state) {
    if (state.cartList.length == 0) return false
    for (let item of state.cartList) {
      if (!item.check) {
        return false;
      }
    }
    return true
  }
}