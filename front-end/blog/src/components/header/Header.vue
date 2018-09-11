<template>
  <div class="header">
    <div class="img-wrap">
      <img src="https://blog-1252736437.cos.ap-shanghai.myqcloud.com/touxiang.jpg" class="img-item">
    </div>
    <div class="title">
      <p>Ben</p>
    </div>
    <div class="desc">
      <p>Master of NJU/Bachelor of UESTC/Enjoy Coding</p>
    </div>
    <div class="item-list">
        <router-link
          tag="i"
          :to="'/'"
          title="回到首页"
          class="iconfont item">
          &#xe600;
        </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'home-header'
  }
</script>

<style scoped>

  .header{
    width: 100%;
    padding: .8rem 0 .4rem;
  }

  .img-wrap{
    width: 100%;
  }

  .img-item{
    display: block;
    margin: 0 auto;
    height: 2.56rem;
    width: 2.56rem;
    border-radius: 50%;
  }

  .title{
    margin-top: .4rem;
    margin-bottom: .4rem;
    font-weight: 700;
    width: 100%;
    text-align: center;
    color: #555;
  }

  .desc{
    margin-bottom: .4rem;
    color:#65737e;
    font-size: 14px;
    text-align: center;
  }

  .item-list{
    width: 100%;
    text-align: center;
  }

  .item{
    display: inline-block;
    font-size: .48rem;
    cursor: pointer;
  }
</style>
