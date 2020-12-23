import {reqCategoryList} from '@/api'


const state={
    categroyList:[]
}
const mutations={
    RECEIVE_CATEGORY_LIST(state,categoryList){
        state.categoryList=categoryList.splice(0,15)
    }
}

const actions={
    async getCategoryList({commit}){
        const result =await reqCategoryList()
        console.log(result)
        if(result.code===200){ // 这个等于200就过分了,才看到
            const categoryList=result.data
            console.log(categoryList)
            // 2,将结果保存到vuex
            commit('RECEIVE_CATEGORY_LIST',categoryList)
        }
    }
}
const getters={}

export default {
    state,
    mutations,
    actions,
    getters
}