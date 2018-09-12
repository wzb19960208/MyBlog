<template>
  <div class="container">
    <div class="title"><span>{{$route.params.type}}</span></div>
    <ul>
      <li v-for="item of 20">
        <router-link tag="a" :to="'/'+$route.params.type+'/'+$route.params.id+'/'+'1'">
          2018年全栈开发个人博客技术选型
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name : 'list'
  }
</script>

<style scoped>

  .container{
    width: 100%;
    padding-bottom: .15rem;
  }

  .title{
    text-align: center;
    font-weight: 700;
    color: #a7adba;
    position: relative;
    margin-bottom: .2rem;
  }

  .title span{
    display: inline-block;
    padding: 0 .2rem;
    background-color: #fff;
  }

  .title::after{
    width: 100%;
    content: '';
    border-top: 1px #333 solid;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: -1;
  }

  ul{
    /*padding: 0 10px;*/
    list-style: none;
    text-align: center;
  }

  ul li{
    font-size: .28rem;
    padding-bottom: .3rem;
    text-decoration: underline;
    /*太长就省略号*/
    word-spacing:1px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }


</style>
