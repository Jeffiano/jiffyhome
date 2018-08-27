<template>
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
          <h1 class="white--text mb-2 display-1 text-xs-center mt-4" >高级寿险规划师</h1>
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
</template>

<script>
export default {
  name: 'Lily',
  props: {
    msg: String
  },
    methods:{
      showAlert:function(){
        alert("想多了，啥都没有！")
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
