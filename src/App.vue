<template>
  <div id="app">
    <Tabs></Tabs>
    <router-view/>
    
  </div>
</template>

<script>
import Tabs from './components/Tabs.vue';
export default {
  name: 'App',
  data(){
      return {
      }
  },
  components:{Tabs}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
*{
    margin:0;
    padding:0;
    body{
      margin:0;
      padding:0;
      background:#ddd;
      ul li{
        list-style:none;
      }
      a{
        text-decoration:none;
      }
    }
}

</style>
