<template>
  <div id="jiffy">
    <v-content>
      <section>
        <v-parallax :src="require('@/assets/hero.jpeg')" height="600">

          <v-toolbar dark color="transparent" flat >
            <v-toolbar-title>Jiffy's Home</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
              <v-btn flat> Like </v-btn>
              <v-btn icon> <v-icon>favorite</v-icon></v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-layout
          column
          align-center
          justify-center
          class="white--text"
          >
          <img :src="require('@/assets/vuetify.png')" alt="Vuetify.js" height="200">
          <h1 class="white--text mb-2 display-1 text-xs-center">Jiffy's Home</h1>
          <div class="subheading mb-3 text-xs-center">Powered by jiffy</div>
        </v-layout>
      </v-parallax>
    </section>
  </v-content>
  <users></users>
</div>
</template>

<script>
  import Users from './Users'

  export default {
    name: 'jiffy',
    data(){
      return{
       users:[

       ],
     }
   },
   methods:{
    updateTitle(title){
      this.title = title;
    }
  },
  components: {
   "users": Users,
 }
 // ,
 // created(){
 //  this.$http.get("http://jsonplaceholder.typicode.com./users")
 //  .then((data)=>{
 //   console.log(data);
 //   this.users = data.body;
 // })
// }
}
</script>

<style scoped>
h1{
  color:purple;
}
</style>
