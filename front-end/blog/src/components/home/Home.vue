<template>
  <div class="container">
    <div class="content">
      <home-content :content="homeList[0]"></home-content>
      <home-content :content="homeList[1]"></home-content>
      <home-content :content="homeList[2]"></home-content>
    </div>
  </div>
</template>

<script>
  import HomeContent from "./components/Content";
  export default {
    name : 'home',
    data (){
      return {
          homeList : [
            {
              title:'工程技术',
              list:[
                {name:'HTML5',id:'001'},
                {name:'CSS3',id:'002'},
                {name:'JavaScript',id:'003'},
                {name:'JQuery',id:'004'},
                {name:'Node.js',id:'005'},
                {name:'Vue.js',id:'006'},
                {name:'Weex',id:'007'},
                {name:'Java/SpringBoot',id:'008'}
              ]
            },
            {
              title:'知识储备',
              list:[
                {name:'程序设计与算法',id:'101'},
                {name:'计算机网络',id:'102'},
                {name:'机器学习',id:'103'},
                {name:'推荐算法',id:'104'},
                {name:'大数据/数据挖掘',id:'105'}
              ]
            },
            {
              title:'Demo展示',
              list:[
                {name:'元素拖拽',id:'201'},
                {name:'去哪儿门票',id:'202'},
                {name:'京东金融',id:'203'}
              ]
            }
          ]
      }
    },
    components: {HomeContent}
  }
</script>

<style scoped>
  .container{
    width: 100%;
  }

  /*@media screen and (min-width: 641px){*/
    /*.content{*/
      /*width: 12rem;*/
      /*margin: 0 auto;*/
    /*}*/
  /*}*/


  /*@media screen and (max-width: 640px){*/

    /*.content{*/
      /*width: 100%;*/
    /*}*/

  /*}*/




</style>
