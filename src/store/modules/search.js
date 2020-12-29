import {reqSearch} from '@/api'
// import { search } from 'core-js/fn/symbol'  // 你干的好事,这行wo'mei写过啊.这是自动生成的,因为你总是自动保存,然后你写一个search的时候他识别正好core-js里有这个
//然后就自动帮你引入了妈呀就是说,删了这行问题都没有了.是,给你演示一下他怎么出来的吧ha  


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
         searchParams={...searchParams}
         Object.keys(searchParams).forEach(key=>{
             if(searchParams[key]===''|| (Array.isArray(searchParams[key])&&searchParams[key].length===0)){
                 delete searchParams[key]
             }
         })
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
    },

    // 总数量
    total(state){
        // console.log("------",state.productList.total)
        return state.productList.total || 0
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}