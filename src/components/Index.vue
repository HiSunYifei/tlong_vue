<template>
  <div id="id-div-main" class="main container-fluid">
    <h1 v-if="!users.length">当前无人直播</h1>
    <template v-else>
      <div class="div-video col-sm-8 col-sm-offset-2">
        <video id="myVideo" class="video-js vjs-default-skin vjs-big-play-centered" data-setup="{}" width="100%"
               height="100%" autoplay controls>
          <source src="rtmp://adessonanotech.com.cn/live/1" type="rtmp/flv">
        </video>
      </div>
      <div class="div-list col-sm-2">
        <ul id="id-items-userList" class="items-userList">
          <template v-for="user in users">
            <li :class="{'hover':(tags.listHover == $index||userId == $index)}" @mouseover="mouseOver($index)"
                @mouseout="mouseOut" @click="changeVideo($index)">
              {{user.username}}
            </li>
          </template>
        </ul>
      </div>
      <div class="col-sm-offset-2 col-sm-1">
        <button id="id-btn-goLiveRoom" class="btn btn-primary">进入直播间</button>
      </div>
    </template>

  </div>
</template>
<script>
  if (localStorage.getItem('user') == 'undefined') {
    localStorage.clear();
  }


  function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);  //这里返回找到正则的匹配

    if (r != null) {
      return unescape(r[2]);    //这里返回对应的值

    }
    return null;
  }

  export default{
    ready: function () {
      var _this = this;
      if(_this.users.length>0){
        var myVideo = videojs('myVideo');
        myVideo.play();
      }
      $.ajax({
        url: baseUrl + "/getMainPageUser",
        type: "POST",
        dataType: "json",
        success: function (result) {
          _this.$set('users', result.users);
        }
      });
    },
    data(){
      var pathname = location.pathname.split('/');
      var userId = parseInt(pathname[pathname.length - 1]);
      if (!userId) {
        userId = '';
      }
      return {
        userId: 1,
        users: [],
        tags: {
          listHover: true
        },
        videoSrc: ''
      }
    },
    methods: {
      mouseOver: function (index) {
        this.tags.listHover = index;
      },
      mouseOut: function () {
        this.tags.listHover = -1;
      },
      changeVideo: function (index) {
        var myVideo = videojs('myVideo');
        var changeId = this.users[index].userId;
        $.ajax({
          url: baseUrl + "/getUser",
          type: "POST",
          dataType: "json",
          data: {
            userId: changeId
          },
          success: function (result) {
            myVideo.src(result.user.rtmpPath);
            setTimeout(function () {
              myVideo.play();
            },100);
          }
        });


      }
    },
    components: {}
  }
</script>

<style lang="less" scoped>

  .main {
    padding: 10rem 0 5rem;
    background: #222222 url("../assets/imgs/backgroundImg.jpg") fixed;
    background-size: 100%;
    min-height: 100vh;
  }

  .div-video {
    margin-right: -2rem;
    height: 38vw;
  }

  .div-list {
    overflow-y: auto;
    height: 37.5vw;
  }

  #id-items-userList li {
    height: 9.37vw;
    line-height: 9.37vw;
  }

  .items-userList {
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: #222222;

  }

  .items-userList li {
    font-size: 2rem;
    border: 2px solid #0a0d22;
    cursor: pointer;
    text-align: center;
    color: white;
  }

  .items-userList li:not(:last-child) {
    border-bottom: none;
  }

  .hover {
    border: 2px solid #E8E8E8 !important;
    border-top: 0.4rem solid #E8E8E8 !important;
    border-bottom: 0.4rem solid #E8E8E8 !important;
  }

  h1 {
    text-align: center;
    color: white;
    font-size: 5rem;
  }
</style>
