<template>
  <v-app>
  <v-content>
      <section>
        <v-parallax :src="require('@/assets/plane.jpg')" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img :src="require('@/assets/china_life_logo.png')"  height="200">
            <h1 class="white--text mb-2 display-1 text-xs-center" style="margin-top: 20px">高级寿险规划师</h1>
            <div class="subheading mb-3 text-xs-center " >徐莉</div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              @click = "showAlert"
            >
              了解更多
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
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
      title: 'Vuetify.js'
    }
  },
  methods:{
    showAlert:function(){
      alert("想多了，啥都没有！")
    }
  }
}
</script>
