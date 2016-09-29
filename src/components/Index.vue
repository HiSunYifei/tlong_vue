<template>
  <div id="id-div-main" class="main container-fluid">
    <h2></h2>
    <div class="div-video col-sm-8 col-sm-offset-2">
      <video id="myVideo" class="video-js vjs-default-skin vjs-big-play-centered" data-setup="{}" width="100%"
             height="100%" autoplay controls>
        <source src="" type="rtmp/flv" >
      </video>
    </div>
    <div class="div-list col-sm-2">
      <ul id="id-items-userList" class="items-userList">
        <template v-for="user in users">
          <li :class="{'hover':tags.listHover == $index}" @mouseover="mouseOver($index)" @mouseout="mouseOut">
            {{user.username}}
          </li>
        </template>
      </ul>
    </div>
    <div class="col-sm-offset-2 col-sm-1">
      <button id="id-btn-goLiveRoom" class="btn btn-primary">进入直播间</button>
    </div>
  </div>
</template>
<script>
  if (localStorage.getItem('user') == 'undefined') {
    localStorage.clear();
  }

  export default{
    data(){
      var pathname = location.pathname.split('/');
      var userId = parseInt(pathname[pathname.length - 1]);
      if (!userId) {
        userId = '';
      }
      return {
        users: [{
          userId: 1,
          username: 'a'
        }, {
          userId: 2,
          username: 'b'
        }, {
          userId: 3,
          username: 'c'
        }],
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
    height: 100vh;
  }

  .div-video {
    margin-right: -2rem;
    height: 37.5vw;
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

  .user-active {
    border: 2px solid #E8E8E8 !important;
    border-top: 0.4rem solid #E8E8E8 !important;
    border-bottom: 0.4rem solid #E8E8E8 !important;
  }

  h2 {
    text-align: center;
    color: white;
  }
</style>
