<template>
  <v-app>
  <Home></Home>
  <!-- <Lily></Lily> -->
</v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import Home from './components/Home'
  import Lily from './components/Lily'

  export default {
    name: 'App',
    components: {
      HelloWorld,
      Home,
      Lily
    },
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire'
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Lily'
      }
    },
    methods:{
      showAlert:function(){
        alert("想多了，啥都没有！")
      }
    }
  }
</script>
