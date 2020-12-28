import {reqCategoryList,reqBannerList,reqRececommends,reqFloors} from '@/api'


const state={
    categoryList:[],
    bannerList:[],
    Rececommends:[],
    floors:[]
}
const mutations={
    RECEIVE_CATEGORY_LIST(state,categoryList){
        state.categoryList=categoryList.splice(0,15)
    },
    RECEIVE_BANNER_LIST(state,bannerList){
       state.bannerList=bannerList
    },
    RECEIVE_COMMEND_LIST(state,Rececommends){
        state.Rececommends=Rececommends
    },
    RECEIVE_Floors_LIST(state,floors){
        state.floors=floors
    }
    

}

const actions={
    // 获取广告轮播列表的异步action
    async getCategoryList({commit}){
        const result =await reqCategoryList ()
        console.log(result)
        if(result.code===200){ // 这个等于200就过分了,才看到
            const categoryList=result.data
            console.log(categoryList)
            // 2,将结果保存到vuex
            commit('RECEIVE_CATEGORY_LIST',categoryList)
        }
    },

    // 获取推荐列表的异步异步action
    async getBannerList({commit}){
        const result=await reqBannerList()
        console.log(result)
        if(result.code===200){
            const bannerList=result.data
            commit('RECEIVE_BANNER_LIST',bannerList)
        }
    },
    // 获取推荐列表
    async getRececommends ({commit}){
        const result=await reqRececommends()
        console.log('yyyyyyyyyyy',result)
        if(result.code===200){
            const Rececommends=result.data
            commit('RECEIVE_COMMEND_LIST',Rececommends)
        }
    },
    // 获取楼层列表
    async getFloors ({commit}){
        const result=await reqFloors()
        console.log('flooor----------',result)
        if(result.data===200){
            const floors=result.data
            commit('RECEIVE_Floors_LIST',floors)
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