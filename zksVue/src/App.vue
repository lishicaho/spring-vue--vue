<template>

  <div id="login">
    <form action="">
      <label for="name">用户名</label>
      <input type="text" v-model.trim="loginData.name" name="name">
      <label for="password">密码</label>
      <input type="password" v-model.trim="loginData.password" name="password">
      <input type="button" value="登陆" @click="doLogin">
    </form>
    <button @click="hreftwo" class="test-one">点我到第二个页面</button>

    <div class="bg-color-white p10 mt5">
    <!-- 列表区域 -->
    <el-table :data="tableData" size="small" border>
      <el-table-column label="序号"  type="index" align="center" width="50"></el-table-column>
      <el-table-column label="对象编码"  prop="name" header-align="center" align="left" width="600"></el-table-column>
      <el-table-column label="对象名称" prop="password" header-align="center" align="left" min-width="100" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" width="100" align="center">
        <template slot-scope="scope">
          <span class="color-primary poi" @click="handleEleEditor(scope.row)">属性</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
<i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
<el-button type="primary" icon="el-icon-search">搜索</el-button>
  </div>
</template>

<script>
import utils from "./utils/utils"

export default {
  name:'login',
  data () {
    return {
       tableData: [],
      loginData:{
        name:"",
        password:""
      }
    }
  },
     methods:{
    getTableData() {
      let success=(response)=>{
         console.log(response.data)
        alert(response.data);
        this.tableData=response.data;
      }
  utils.axiosMethod({
        method:"GET",
        url:"/user/message",
        data:this.loginData,
        callback:success    
      })

    },
     /**  utils.axiosMethod({
        method:"GET",
        url:"/user/message"       
      }).then(function(data){
      that.tableData = data;
    },function(error){
      
     })*/

     

    /** this.api({
          url: "/user/message",
          method: "get"
        }).then(data => {
          this.tableData = data;
        })
      
    }, */

    


  


    doLogin(){
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
     this.$router.push({ path:'/two'  })
     }
    },

  
  mounted() {
    this.getTableData();
  }
}
</script>
