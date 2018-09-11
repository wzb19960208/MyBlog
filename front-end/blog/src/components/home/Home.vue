<template>
  <div class="container">
    <div class="content">

    </div>
  </div>
</template>

<script>
  export default {
    name : 'home'
  }
</script>

<style scoped>
  .container{
    width: 100%;
  }

  @media screen and (min-width: 641px){
    .content{
      height: 1000px;
      width: 12rem;
      margin: 0 auto;
      background: #666;
    }
  }


  @media screen and (max-width: 640px){

    .content{
      height: 1000px;
      width: 100%;
      background: #eee;
    }

  }




</style>
