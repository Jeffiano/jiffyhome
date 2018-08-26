<template>
  <div id="jiffy">
    <users v-bind:users="users"></users>
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
},
created(){
this.$http.get("http://jsonplaceholder.typicode.com./users")
.then((data)=>{
	console.log(data);
	this.users = data.body;
})
}
}
</script>

<style scoped>
h1{
  color:purple;
}
</style>
