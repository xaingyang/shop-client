import ajax from './ajax'
import mockAjax from './ajaxMock'

// 首页三级分类
export function reqCategoryList(){
    // return ajax.get('/api/product/getBaseCategoryList')
    // return ajax('/api/product/getBaseCategoryList')
    return ajax({
        url:'/api/product/getBaseCategoryList',
        method:'get'  //默认是get,所以写不写都可以
    })
}

// 首页轮播的图片
export const reqBannerList=()=>ajax('/api/cms/banner')

// 获取广告轮播列表  reqRececommends
export const reqRececommends =()=>mockAjax.get('/recommends')

// 获取首页楼层列表
export const reqFloors =()=>mockAjax.get('/floors')

// 搜索分页列表
export const reqSearch = function(searchParams){
    return ajax({
        url:'/api/list',
        method: 'post',
        data:searchParams
    })
}


