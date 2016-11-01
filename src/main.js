import Vue from 'vue'
import App from './App'
import Router from 'vue-router'


Vue.use(Router);

//Router
var router = new Router({history: true,base:''});
router.map({
  '*': {
    component: require('./components/Index.vue')
  },
  '/userInfo': {
    component: require('./components/UserInfo.vue')
  },
  /*'/^[1-9][0-9]*$': {
    component: require('./components/LiveRoom.vue')
  }*/
  '/:id': {
    component: require('./components/LiveRoom.vue'),
    name:'liveRoom'
  }
});
router.start(App, 'app');
