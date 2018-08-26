<template>
  <v-app>
  <!-- <Home></Home> -->
  <!-- <Lily></Lily> -->
  <router-view></router-view>
</v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import Home from './components/Home'

  export default {
    name: 'App',
    components: {
      HelloWorld,
      Home
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
