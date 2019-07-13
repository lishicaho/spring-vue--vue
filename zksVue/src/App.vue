<template>
  <div id="login">
    <form action="">
      <label for="name">用户名</label>
      <input type="text" v-model.trim="loginData.name" name="name">
      <label for="password">密码</label>
      <input type="password" v-model.trim="loginData.password" name="password">
      <input type="button" value="登陆" @click="doLogin">
    </form>
  </div>
</template>

<script>
import utils from "./utils/utils"
export default {
  name:'login',
  data () {
    return {
      loginData:{
        name:"",
        password:""
      }
    }
  },
 /**  methods:{
      doLogin() {
      debugger;
      console.log(111)
     utils.axiosMethod({
        method:"POST",
        url:"/user/login",
        data:this.loginData,
       
      }).then(({ data }) => {
           debugger;
           alert(data.msg);
        })
        .catch(({ msg }) => {
         alert(data.msg);
        });
    }


 } 
   **/


     methods:{
    doLogin(){
       debugger;
      console.log(111)
      let success=(response)=>{
        alert(response.data.msg);
      }
      utils.axiosMethod({
        method:"POST",
        url:"/user/login",
        data:this.loginData,
        
        callback:success
        
      })
    }
  }


 
}
</script>
