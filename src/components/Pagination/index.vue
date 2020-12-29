<template>
  <div class="pagination">
      <button :disabled="myCurrentPage===1" :class="{disable:myCurrentPage===1}" @click="setCurrentPage(myCurrentPage-1)">上一页</button>
      <button v-if="startEnd.start!=1" @click="setCurrentPage(1)">1</button>
      <button class="disable" v-if="startEnd>2">...</button>

      <button v-for="item in startEnd.end" :key="item" v-if="item>=startEnd.start"
          :class="{active:item===myCurrentPage}" @click="setCurrentPage(item)">{{item}}</button>
      <!-- <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button> -->
      <button class="disable" v-if="startEnd.end<totalPages-1">...</button>
      <button :disabled="myCurrentPage===totalPages" :class="{disable:myCurrentPage}" @click="setCurrentPage(myCurrentPage+1)">下一页</button>
      <button class="disable">共{{total}}条</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props:{
      currentPage:{
          type:Number,
          default:1
      },
      total:{
          type:Number,
          default:0
      },
      pageSize:{
          type:Number,
          default:10
      },
      showPageNo:{
          type:Number,
          default:5,
          validator:function(value){
              return value%2===1
          }
      }
  },
  data(){
      return {
          myCurrentPage:this.currentPage || 1,
          isShow:true
      }
  },
  computed:{
    //   总页数
    totalPages(){
        const {total,pageSize}=this
        return Math.ceil(total/pageSize)
    },

    // 计算出包含从start到end的数组
    // startEndArr(){
    //     const {start,end}=this.startEnd
    //     const arr=[]
    //     for (let i=start;i<=end;i++){
    //         arr.push(i)
    //     }
    //     return arr
    // },

    // start/end: 连续页码数的开始页码与结束页码 {start: 3, end: 7}
    startEnd(){
        let start,end   
        const {myCurrentPage,showPageNo,totalPages}=this
        //     当前页码     最大连续页码数  总页数 

        start=myCurrentPage-Math.floor(showPageNo/2)
        // 如果myCurrentPage比较小, 计算的结果有可能小于1
        if(start<1){
            start =1
        }

        // end=myCurrentPage+Math.floor(showPageNo/2)
        end=start+ showPageNo-1

        // end ===> 超过了totalPages  
        if(end>totalPages){
            // 修改end为totalPages
            end=totalPages
            start=myCurrentPage-Math.floor(showPageNo/2)
            if(start<1){
            start =1
        }
        }

        return {start,end}
    }
  },
  watch:{
       // 当接收到新的currentPage(本质就是Sesarch组件中的options.pageNo变化了)
      currentPage(value){
          this.myCurrentPage=value
      }
  },
  methods:{
      // 设置新的当前页码
      setCurrentPage(page){
        if(page===this.myCurrentPage) return
        //   更改内部的页码数
        this.myCurrentPage=page
        // 通知父组件当前页码变化
        this.$emit('currentChange',page)
      }  
  } 
}
</script>

<style lang="less" scoped>
.pagination {
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &.active {
        background: blue;
        color: white;
        cursor: not-allowed;
      }

      &.disable {
        cursor: not-allowed;
        color: #ccc;
      }
    }
  }
</style>
