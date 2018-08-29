<template>
    <!-- <ul>
      <li v-for="user in users" :key='user'>
       <v-img :src="user.thumbnail"></v-img> 
      </li>
    </ul>
  -->

  <v-layout justify-center>
    <v-flex xs12 sm10>
      <v-card>
        <v-container
        fluid
        grid-list-md
        center
        >
        <v-layout row wrap>
          <v-flex
          v-for="(user,index) in users"
          :key="user.url"
          v-if = "user.url"
          xs4
          >
          <v-card >
            <v-img
            v-bind:src="user.url"
            height="300px"
            v-on:error="user.url = null"
            > 
            <v-container
            fill-height
            fluid
            pa-2
            >
          </v-container>
        </v-img>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>favorite</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>share</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</v-card>
</v-flex>
</v-layout>
</template>

<script>
  export default {
    name: 'users',
    props:{
      users:{
        type:Array,
        required:true
      },
    },
    data () {
      return {

      }
    },
    methods:{
      deleteUser:function(){
        this.users.pop();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  display:flex;
  flex-wrap:wrap;
  list-style-type:none;
  padding:1;
}
li{
  flex-grow :1;
  flex-basis:200px;
  text-align:center;
  padding:30px;
  border:1px solid #222;
  margin:10px;
}


</style>
