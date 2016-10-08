<template>
  <nav class="navbar navbar-inverse" id="id-nav-navbar">
    <div class="navbar-header">
      <a class="navbar-brand" href="index.html">TLongTV</a>
    </div>
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active">
            <a v-link="{path:'/'}">直播</a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li class="dropdown" v-show="isLogin">
              <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button"
                 aria-haspopup="true" aria-expanded="false">
                {{user.username}}<span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a v-link="{path:'/userInfo'}" target="_blank">个人信息</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="javascript:void(0)" @click="logout">注销</a></li>
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
                <button id="id-btn-login" class="btn btn-block btn-danger" @click="login">登录</button>
              </ul>
            </li>
            <li class="dropdown" v-show="!isLogin">
              <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button"
                 aria-haspopup="true" aria-expanded="false">注册</a>
              <ul id="id-ul-register" class="dropdown-menu" @keypress.enter="register()" >
                <div class="input-group">
                  <span class="input-group-addon" aria-describedby="sizing-addon1">手机</span>
                  <input type="text" class="form-control" placeholder="手机号码" v-model="register_username">
                </div>
                <div class="input-group input-group-password">
                  <span class="input-group-addon" aria-describedby="sizing-addon1">密码</span>
                  <input type="password" class="form-control" placeholder="密码" v-model="register_password">
                </div>
                <button class="btn btn-block btn-success" @click="register()">注册</button>
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
        user = JSON.parse(localStorage.getItem('user'));
      }
      return {

        user: user,
        login_username:'',
        login_password:'',
        register_username:'',
        register_password:''
      }
    },
    computed:{
      isLogin: function () {
        if(!this.user.username){
          return false;
        }
        return true;
      },
    },
    methods: {
      login:function () {
        var _this = this
        $.ajax({
            url: baseUrl+'/login',
            type: "POST",
            dataType: "json",
            data: {
              phoneNumber:_this.login_username,
              password:_this.login_password
            },
            success: function (result) {
              if (result.status == 1) {
                localStorage.setItem('user', JSON.stringify(result.user));
                _this.user = result.user;
                _this.login_username ='';
                _this.login_password ='';
              }
              swal({
                title: result.message,
                html: true,
                timer: 3000,
                showConfirmButton: true
              });
            }
          });
      },
      register:function () {
        var _this = this

        if (!/^[1][\d]{10}$/.test(_this.register_username)) {
          swal("手机号码非法！", "", "warning");
          return;
        } else if (_this.register_password.length < 6) {
          swal("请输入大于6位的密码！", "", "warning");
          return;
        }
        $.ajax({
          url: baseUrl+'/register',
          type: "POST",
          dataType: "json",
          data: {
            phoneNumber:_this.register_username,
            password:_this.register_password
          },
          success: function (result) {
            if (result.status == 1) {
              localStorage.setItem('user', JSON.stringify(result.user));
              _this.user = result.user;
              _this.register_password = '';
              _this.register_username = '';
            }
            swal({
              title: result.message,
              html: true,
              timer: 3000,
              showConfirmButton: true
            });
          }
        });
      },
      logout:function () {
        this.user = '';
        localStorage.clear('user');
      }
    }
  }
</script>

<style lang="less">
  .navbar {
    position: absolute;
    top:0;
    left:0;
    z-index: 99;
    border-radius: 0;
    margin: 0;
    width: 100%;
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
