import {reqSearch} from '@/api'

const state={
    productList:{},
}

const mutations={
    ReCEIVE_PRODUCT_LIST(state,productList){
        state.productList=productList
    }
}

const actions={
//    获取指定的商品列表
     async getProduction({commit},searchParams){
         const result=await reqSearch(searchParams)
         console.log('getProduction',result)
         if(result.code===200){
             commit('ReCEIVE_PRODUCT_LIST',result.data)
         }
     }
}

const getters={
    // 商品分页列表
    goodsList(state){
        return state.productList.goodsList || []
    },
    // 品牌列表
    // trademarkList(state){
    //     return state.productList.trademarkList || []
    // },
    // 属性列表
    attrsList(state){
        return state.productList.attrsList || []
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}