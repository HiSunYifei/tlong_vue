<template>
  <div class="main container-fluid">
    <div class="row">
      <div class="col-sm-2">
        <ul id="id-ul-left" class="nav nav-pills nav-stacked">
          <li role="presentation" :class="{'active':state.left == 0}"><a href="javascript:;"
                                                                         @click="changeLeftState(0)">我的资料</a></li>
          <li role="presentation" :class="{'active':state.left == 1}"><a href="javascript:;"
                                                                         @click="changeLeftState(1)">直播教程</a></li>
          <!--<li role="presentation"><a href="javascript:;">修改密码</a></li>-->
          <!--<li role="presentation"><a href="#">我的资料</a></li>-->
        </ul>
      </div>
      <div id="id-div-main" class="col-sm-10">
        <div id="id-div-info" class="items-info" v-show="state.left == 0">
          <ul id="id-ul-center" class="nav nav-tabs">
            <li role="presentation" :class="{'active':state.center == 0}"><a href="javascript:;"
                                                                             @click="changeCenterState(0)">直播间资料</a>
            </li>
            <li role="presentation" :class="{'active':state.center == 1}"><a href="javascript:;"
                                                                             @click="changeCenterState(1)">修改密码</a></li>
            <li role="presentation" :class="{'active':state.center == 2}"><a href="javascript:;"
                                                                             @click="changeCenterState(2)">我的资料</a></li>
          </ul>
          <form v-show="state.center == 0">
            <label>直播间标题:</label>
            <input id="id-input-liveRoomTitle" type='text' name="title" value="{{user.liveRoom.title}}">
            <br>
            <label>直播公告:</label>
            <textarea id="id-input-liveRoomNotice" style="resize: none"
                      name="notice">{{user.liveRoom.notice}}</textarea>
            <br>
            <label>我的直播地址:</label>
            <input id="id-input-myAddress" class="items-address" type='text' disabled
                   value="{{user.liveRoom.liveRoomUrl}}">
            <br>
            <label>我的rtmpUrl:</label>
            <input id="id-input-rtmpUrl" class="items-address" type='text' disabled value="{{user.rtmpUrl}}">
            <br>
            <label>我的rtmp流密钥:</label>
            <input id="id-input-rtmpSecretKey" class="items-address" type='text' disabled
                   value="{{user.rtmpSecretKey}}">
            <br>
            <button class="btn btn-primary btn-form" type="button" @click="updateLiveRoom">提交</button>
          </form>
          <form class="items-info" v-show="state.center == 1">
            <label>原密码:</label>
            <input type='password' v-model="changePassword.oldPassword">
            <br>
            <label>新密码:</label>
            <input type='password' v-model="changePassword.newPassword">
            <br>
            <label>再次输入新密码:</label>
            <input type='password' v-model="changePassword.newPasswordAnain">
            <br>
            <button class="btn btn-primary btn-form" type="button" @click="changePWD">提交</button>
          </form>
          <form class="items-info" enctype="multipart/form-data" v-show="state.center == 2">
            <img id="id-img-avatar" alt="头像" style="max-height: 150px">
            <br>
            <label>头像:</label>
            <input type="file" id="id-input-avatar" name="avatar">
            <br>
            <label>我的昵称:</label>
            <input id="id-input-username" name="username" type='text' value="{{user.username}}" placeholder="忘了爱">
            <br>
            <label>擅长领域:</label>
            <input name="beGoodAt" type='text' value="{{user.beGoodAt}}" placeholder="JAVA/python/C++/C#">
            <br>
            <label>工作年限:</label>
            <input name="workYear" type='text' value="{{user.workYear}}" placeholder="工作年限">
            <br>
            <label>公司名:</label>
            <input name="company" type='text' value="{{user.company}}" placeholder="公司名">
            <br>
            <label>邮箱:</label>
            <input name="email" type='text' value="{{user.email}}" placeholder="邮箱">
            <br>
            <label style="margin-top: 0.8rem">性别:</label>
            <label class="radio-inline">
              <input type="radio" name="sex" value="1" v-bind:checked="user.sex == 1"> 男
            </label>
            <label class="radio-inline">
              <input type="radio" name="sex" value="2" v-bind:checked="user.sex == 2"> 女
            </label>
            <br>
            <button class="btn btn-primary btn-form" type="button" @click="updateUserInfo">提交</button>
          </form>
        </div>


        <div id="id-div-course" v-show="state.left == 1">
          <ul id="id-ul-center2" class="nav nav-tabs">
            <li role="presentation" class="active"><a href="javascript:;" @click="changeCenterState(0)">直播软件</a></li>
            <li role="presentation"><a href="javascript:;" @click="changeCenterState(1)">基本设置</a></li>
            <li role="presentation"><a href="javascript:;" @click="changeCenterState(2)">内容设置</a></li>
            <li role="presentation"><a href="javascript:;" @click="changeCenterState(3)">开始直播</a></li>
          </ul>
          <div class="div-course" v-show="state.center == 0">
            <h3>直播软件</h3>
            <p>软件推荐:<i>OBS</i></p>
            <p>下载方式:</p>
            <p>登录：<a href="https://obsproject.com/" target="_Blank">https://obsproject.com/</a>点绿色的Download即可，自动安装，老版本自动升级。如无法下载，请试试下面的百度网盘地址：
              <a class="" href="https://pan.baidu.com/s/1nvdHSnB" target="_Blank">[百度网盘下载点我]</a></p>
            <p class="text-danger">注意：目前不支持XP，XP用户请出门左转Xsplit</p>
            <img class="pull-left" src="../assets/imgs/course_obsDownload.png" alt="直播软件">
            <div class="pull-left" style="display:block;margin-left: 4rem">
              <p>Linux下安装教程：</p>
              <p>
                1.ubuntu14.04先安装ffmpeg。<br>
                $ sudo add-apt-repository ppa:kirillshkrogalev/ffmpeg-next <br>
                $ sudo apt-get update && sudo apt-get install ffmpeg <br>
              </p>
              <p>
                2.ubuntu14.04/ubuntu15.04安装OBS。<br>
                $ sudo add-apt-repository ppa:obsproject/obs-studio <br>
                $ sudo apt-get update && sudo apt-get install obs-studio <br>
              </p>
            </div>
          </div>

          <div class="div-course" v-show="state.center == 1">
            <h3>基本设置</h3>
            <p>以下内容将以windows10为例(MAC,Linux同理）</p>
            <p>点击设置</p>
            <img src="../assets/imgs/course_obsSetting1.png" alt="直播设置">
            <p>通用部分默认即可，点击串流</p>
            <img src="../assets/imgs/course_obsSetting2.png" alt="直播设置">
            <p>打开tlongTv主页，右上角登录，点击个人信息</p>
            <img src="../assets/imgs/course_userInfo.png" alt="直播设置">
            <p>OBS串流设置页面的URL和流密钥分别对应个人信息页面的rtmpURL和rtmp流密钥</p>
            <p>设置完毕，图中输出为设置直播录像相关，音频为输出音频相关，根据个人情况设置</p>
            <img src="../assets/imgs/course_obsSetting3.png" alt="直播设置">
          </div>

          <div class="div-course" v-show="state.center == 2">
            <h3>内容设置</h3>
            <p>在来源中添加捕获的内容，可以选择显示器，也能根据需要选择</p>
            <img src="../assets/imgs/course_obsSetting4.png" alt="直播设置">
          </div>

          <div class="div-course" v-show="state.center == 3">
            <h3>开始直播</h3>
            <p>点击开始串流，开始直播之旅</p>
            <img src="../assets/imgs/course_obsSetting5.png" alt="直播设置">
            <br>
            <br>
            <a href="index.html?userId={{user.userId}}" class="btn btn-success" role="button">去看看</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      var user = JSON.parse(localStorage.getItem('user'));
      return {
        user: user,
        state: {
          left: 0,
          center: 0
        },
        changePassword: {
          oldPassword: '',
          newPassword: '',
          newPasswordAgain: ''
        }
      }
    },
    methods: {
      changePWD: function () {
        var _this = this;
        if (_this.changePassword.newPassword != _this.changePassword.newPasswordAgain) {
          swal({
            title: "新密码与原密码不能相同！",
            type: 'warning',
            timer: 2000,
            showConfirmButton: true
          });
          return;
        }
        $.ajax({
          url: baseUrl + '/updateUserPassword',
          type: "POST",
          dataType: "json",
          data: {
            userId: _this.user.id,
            old_password: _this.changePassword.oldPassword,
            new_password: _this.changePassword.newPassword
          },
          success: function (result) {

          }
        });
      },
      updateUserInfo: function () {
        $.ajax({
          url: baseUrl + '/updateUserInfo',
          type: "POST",
          dataType: "json",
          data: {},
          success: function (result) {

          }
        });
      },
      updateLiveRoom: function () {
        $.ajax({
          url: baseUrl + '/updateLiveRoom',
          type: "POST",
          dataType: "json",
          data: {},
          success: function (result) {

          }
        });
      },
      changeLeftState: function (index) {
        this.state.left = index;
      },
      changeCenterState: function (index) {
        this.state.center = index;
      }
    }
  }
</script>

<style lang="less">
  .main {
    padding: 10rem 0 5rem;
    min-height: 100vh;
  }

  h2 {
    text-align: center;
    color: white;
  }

  .navbar-right a {
    font-size: 1.8rem;
  }

  .dropdown-menu {
    background-color: #222222;
    min-width: 200px;
  }

  .dropdown-menu a {
    color: whitesmoke !important;
  }

  .dropdown-menu a:hover {
    color: black !important;
  }

  .dropdown-menu button {
    margin-top: 0.5rem;

  }

  .input-group-password {
    margin-top: 0.5rem;
  }

  .items-info form {
    margin-top: 2rem;
  }

  .items-info label:not(.radio-inline) {
    display: inline-block;
    width: 10%;
    min-width: 150px;
    font-size: 1.5rem;
    vertical-align: top;
    margin-top: 5px;
  }

  .btn-primary {
    width: 100px;
  }

  .btn-form {
    margin-top: 10px;
  }

  .items-info input[type='text'], .items-info input[type='password'], textarea {
    height: 3rem;
    margin: 3px;
    padding: 3px;
    width: 25%;
    min-width: 350px;
    border-radius: 3px;
    border: 1px solid #aeaeae;
  }

  .items-info textarea {
    height: 10rem;
  }

  .div-course {

  img {
    width: 40%;
  }

  }
</style>
