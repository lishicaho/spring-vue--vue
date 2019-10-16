<template>
  <div id="two">
   1111
  </div>
</template>

<script>
import utils from "./utils/utils"
export default {
  name:'two',
  data () {
    return {
      loginData:{
        name:"",
        password:""
      }
    }
  },

     methods:{
    doLogin(){
       debugger;
      console.log(111)
      let success=(response)=>{
         console.log(response)
        alert(response.data.msg);
      }
      utils.axiosMethod({
        method:"POST",
        url:"/user/login",
        data:this.loginData,
        callback:success
        
      })
    },
     hreftwo(){
     this.$router.push({ path:'/two.vue'  })
     }
    }


 
}
</script>
