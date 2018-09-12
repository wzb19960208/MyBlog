<template>
  <div class="container">
      <div class="title"><span>{{content.title}}</span></div>
      <ul>
        <li v-for="item of content.list"><a href="#">{{item.name}}</a></li>
      </ul>
  </div>
</template>

<script>
  export default {
    name : 'HomeContent',
    props : ['content']
  }
</script>

<style scoped>

  .container{
    width: 100%;
    padding-bottom: .15rem;
    text-align: center;
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

  ul li{
    font-size: .28rem;
    margin-bottom: .2rem;
  }

</style>
