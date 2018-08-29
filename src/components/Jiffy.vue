<template>
  <div id="jiffy">
 <!--    <v-content>
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
  </v-content> -->
  <v-toolbar dark color="pink" flat fixed >
    <v-toolbar-title>Jiffy's Home</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat> Like </v-btn>
      <v-btn icon> <v-icon>favorite</v-icon></v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <users v-bind:users="users"  class="mt-5" @loadMore = "loadMore"></users>
  <v-btn
  fixed
  absolute
  dark
  fab
  bottom
  right
  color="pink"
  class="mb-5"
  floating
  @click = "loadMore"
  >
  <v-icon>add</v-icon>
</v-btn>
<router-link to="lily">Lily</router-link>
</div>
</template>

<script>
  import Users from './Users'

  export default {
    name: 'jiffy',
    data(){
      return{
        pageIndex:1,
        users:[]
      }
    },
    methods:{
      loadMore(){
        // this.$http.get("http://jsonplaceholder.typicode.com./users")
        // this.$http.get("https://www.apiopen.top/journalismApi")
        this.$http.get("https://www.apiopen.top/meituApi?page=" + this.pageIndex)
        // this.$http.get("https://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/3")
        // this.$http.get("https://www.apiopen.top/satinGodApi?type=1&page=1")
        .then((data)=>{
         console.log(data.body);
         this.users = this.users.concat(data.body.data);
         this.pageIndex++;
       })
      }
    },
    components: {
     "users": Users,
   },
   created(){
    this.loadMore();
  }
}
</script>

<style scoped>
h1{
  color:purple;
}
</style>
