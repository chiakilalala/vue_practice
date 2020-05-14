<template>
  <div id="app">



    
    <router-view/>

  </div>
</template>


<script>
export default {
  name:'App',
  // created(){
  //   // 1. 呼叫 api action
  // this.$store.dispatch('actionAJAXexample');

  // },
  created(){
    const api =`https://vue-course-api.hexschool.io/api/chiaki/products`
    //api 伺服器路徑
    this.axios.get(api).then((response) => {
    console.log(response.data);
  })
//  this.$store.dispatch('getApi');
}
}
</script>

<style lang="scss">
@import "./assets/all"

</style>
