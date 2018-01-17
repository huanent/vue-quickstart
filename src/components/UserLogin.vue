<template>
  <div id='user-login'>
    <div>
      <div id='title'>
        <h1>系统登录</h1>
      </div>
      <div id='loginPnl'>
          <el-form :model="loginDTO" :rules="loginRules" ref="loginForm">
            <el-form-item prop="uid">
              <el-input v-model="loginDTO.uid" tabindex="1" :autofocus="true">
                <template slot="prepend">账户：</template>
              </el-input>
            </el-form-item >
            <el-form-item prop="pwd">
              <el-input type="password" v-model="loginDTO.pwd" tabindex="2">
                <template slot="prepend">密码：</template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" id='loginBtn' @click="login" tabindex="3">登录</el-button>
            </el-form-item>
          </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Account from "@/api/Account";
import { Message } from "element-ui";
import Router from "../router";

export default {
  data() {
    return {
      loginDTO: {
        uid: "admin",
        pwd: "admin"
      },
      loginRules: {
        uid: [{ required: true, message: "请输入账户名称" }],
        pwd: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  methods: {
    login() {
      this.$refs["loginForm"].validate(valid => {
        if (!valid) {
          Message.error("登录信息不完整");
          return;
        }

        Account.login(this.loginDTO)
          .then(rsp => {
            Router.push({
              name:'AdminHome'
            })
          })
          .catch(rsp => {
            Message.error("未知错误请重试");
          });
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
