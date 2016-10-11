<template>
  <div style="margin-top: 100px">123</div>
  <!--<div class="div-main container-fluid">
    <div class="col-sm-8 col-sm-offset-1 div-roomInfo" v-show="username">
      <div style="position: absolute;bottom: 1rem;left: 15px;">
        <img :src="avatar" alt="头像" style="width: 100px;height: 100px;">
      </div>
      <div class="col-sm-8" style="margin-left: 100px">
        <h2>{{liveRoom.title}}</h2>
        <h4>{{username}}</h4>
      </div>

    </div>
    <div class="div-video col-sm-8 col-sm-offset-1">
      <video id="myVideo" class="video-js vjs-default-skin vjs-big-play-centered" data-setup="{}" width="100%"
             height="100%" autoplay controls>
        <source src="rtmp://adessonanotech.com.cn/live/1" type="rtmp/flv"/>
      </video>
    </div>

    <div class="div-chatArea col-sm-3" id="id-div-chatArea">
      <div id="id-div-showChat" class="div-showArea">

      </div>


      <div id="id-div-inputChat" class="div-inputArea">
        <textarea name="" id="id-input-text"></textarea>
        <div class="div-chatSubmit">
          <button id="id-input-submit" class="btn btn-block btn-primary" @click="submit">发送</button>
        </div>
      </div>
    </div>

  </div>-->
</template>

<script>
  export default{
    data(){
      return {ms: 123}
    }
  }
</script>

<style lang="less" scoped>

  .div-main {
    padding: 10rem 0 5rem;
  }

  .div-roomInfo {
    h2, h4 {
      color: white;
    }
    h2:first-child {
      margin-right: 20px;
    }
  }

  .div-video {
    display: none;
    margin-right: -2rem;
    height: 37.5vw;
  }

  .div-chatArea {
    height: 37.5vw;

  }

  .div-showArea {
    box-sizing: border-box;
    height: 85%;
    overflow-y: auto;
    padding: 5px;
    background-color: whitesmoke;
    position: relative;
    overflow-x: hidden;
  }

  .div-inputArea {
    height: 15%;
    font-size: 0;
    textarea {
      width: 80%;
      height: 100%;
      resize: none;
      font-size: 1rem;
      padding: 5px;
    }
    .div-chatSubmit {
      width: 20%;
      height: 100%;
      display: inline-block;
      vertical-align: top;
      .btn {
        height: 100%;
        border-radius: 0;
      }
    }
  }



</style>
