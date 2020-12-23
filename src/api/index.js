import ajax from './ajax'

// 首页三级分类
export function reqCategoryList(){
    // return ajax.get('/api/product/getBaseCategoryList')
    // return ajax('/api/product/getBaseCategoryList')
    return ajax({
        url:'/api/product/getBaseCategoryList',
        method:'get'  //默认是get,所以写不写都可以
    })
}