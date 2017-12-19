<template>
  <div id='user-login'>
    <div>
      <div id='title'>
        <h1>后台admin</h1>
      </div>
      <div id='loginPnl'>
          <el-form :model="loginDTO">
            <el-form-item :prop="loginDTO.uid">
              <el-input v-model="loginDTO.uid">
                <template slot="prepend">账户：</template>
              </el-input>
            </el-form-item >
            <el-form-item :prop="loginDTO.pwd">
              <el-input type="password" v-model="loginDTO.pwd">
                <template slot="prepend">密码：</template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" id='loginBtn' @click="login">登录</el-button>
            </el-form-item>
          </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Account from "../api/Account";
import { Message } from "element-ui";

export default {
  data() {
    return {
      loginDTO: {
        uid: "",
        pwd: ""
      }
    };
  },
  methods: {
    login() {
      Account.login(this.loginDTO)
        .then(rsp => {
          this.$router.push("AdminHome");
        })
        .catch(rsp => {
          Message.error("未知错误请重试");
        });
    }
  }
};
</script>

<style scoped>
#user-login {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
#loginPnl {
  width: 20rem;
  margin: 0 auto;
}
#loginBtn {
  width: 100%;
}
#title {
  margin-bottom: 5rem;
  text-align: center;
}
</style>
