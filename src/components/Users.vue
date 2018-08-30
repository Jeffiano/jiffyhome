<template>
    <!-- <ul>
      <li v-for="user in users" :key='user'>
       <v-img :src="user.thumbnail"></v-img> 
      </li>
    </ul>
  -->

  <v-layout justify-center>

    <v-flex xs12 sm10>
      <v-card >
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
            @click = "dialog = true;currentIndex = index"
            v-bind:src="user.url"
            height="300px"
            v-on:error="users.splice(index, 1)"
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


<v-dialog
v-model="dialog"
>
<v-flex >
  <v-card>
    <v-img 
    @click="nextImage"
    v-bind:src="users[this.currentIndex].url"
    > 
  </v-img>
</v-card>

</v-flex>
</v-dialog>




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
        dialog:false,
        currentUrl:"",
        currentIndex:0,
      }
    },
    methods:{
      nextImage:function(){
        this.currentIndex ++;
        if(this.currentIndex >= this.users.length){
          this.$emit("loadMore");
        }
        console.log("currentIndex:" + currentIndex);
      },
      prevImage:function(){
        this.currentIndex --;
        console.log("currentIndex:" + currentIndex);
      }
    },
    created(){
      let _this = this;
      document.onkeydown = function(e){
        let _key = window.event.keyCode;
        if(_key === 86){
          _this.nextImage();
        }
      }    
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
