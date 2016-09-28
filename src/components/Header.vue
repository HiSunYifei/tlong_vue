<template>
  <nav class="navbar navbar-inverse" id="id-nav-navbar">
    <div class="navbar-header">
      <a class="navbar-brand" href="index.html">TLongTV</a>
    </div>
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active">
            <a href="index.html">直播</a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li class="dropdown" v-show="isLogin">
              <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button"
                 aria-haspopup="true" aria-expanded="false">
                {{user.username}}<span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a v-link="{path:'/index'}" target="_blank">个人信息</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="javascript:void(0)" id="id-btn-logout">注销</a></li>
              </ul>
            </li>
            <li class="dropdown" v-show="!isLogin">
              <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button"
                 aria-haspopup="true"
                 aria-expanded="false">登录</a>
              <ul id="id-ul-login" class="dropdown-menu">
                <div class="input-group">
                  <span class="input-group-addon" aria-describedby="sizing-addon1">手机</span>
                  <input type="text" class="form-control" placeholder="手机号码" v-model="login_username">
                </div>
                <div class="input-group input-group-password">
                  <span class="input-group-addon" aria-describedby="sizing-addon1">密码</span>
                  <input type="password" class="form-control" placeholder="密码" v-model="login_password">
                </div>
                <button id="id-btn-login" class="btn btn-block btn-danger" @click="test">登录</button>
              </ul>
            </li>
            <li class="dropdown" v-show="!isLogin">
              <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button"
                 aria-haspopup="true" aria-expanded="false">注册</a>
              <ul id="id-ul-register" class="dropdown-menu">
                <div class="input-group">
                  <span class="input-group-addon" aria-describedby="sizing-addon1">手机</span>
                  <input type="text" class="form-control" placeholder="手机号码" v-model="register_username">
                </div>
                <div class="input-group input-group-password">
                  <span class="input-group-addon" aria-describedby="sizing-addon1">密码</span>
                  <input type="password" class="form-control" placeholder="密码" v-model="register_password">
                </div>
                <button class="btn btn-block btn-success">注册</button>
              </ul>
            </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

  export default {
    data () {
      var isLogin = false;
      var user = {};
      if (localStorage.getItem('user')) {
        isLogin = true;
        user = JSON.stringify(localStorage.getItem('user'));
      }
      return {
        isLogin: isLogin,
        user: user,
        login_username:'',
        login_password:'',
        register_username:'',
        register_password:''
      }
    },
    methods: {
      test:function () {
        console.log(this.isLogin);
      }
    }
  }
</script>

<style lang="less" scoped>

  .navbar {
    border-radius: 0;
  }

  .navbar-right a {
    font-size: 1.8rem;
  }

  .dropdown-menu {
    background-color: #222222;
    min-width: 200px;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    border: 0;
  }

  .dropdown-menu a {
    color: whitesmoke !important;
  }

  .dropdown-menu a:hover {
    color: #222222 !important;
  }

  .dropdown-menu button {
    margin-top: 0.5rem;
  }

  .input-group-password {
    margin-top: 0.5rem;
  }
</style>
