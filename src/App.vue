<template>
  <div id="app">
      <v-header>
      </v-header>
      <v-aside>
      </v-aside>
      <div class="main">
        <transition :name="transitionName">
          <router-view class="child-view">
          </router-view>
      </transition>
      </div>
      <div class="bk">
      </div>
  </div>
</template>

<script>
import header from '@components/header.vue';
import aside from '@components/aside.vue';
import 'bootstrap/dist/css/bootstrap.css';
export default{
  name:'app',
  data(){
    return{
      transitionName:'slide-left'
    }
  },
  components:{
    'v-header':header,
    'v-aside':aside
  },
  watch:{
     '$route' (to, from) { 
      let isBack=this.$router.isBack;
       if(to.path == '/'){ 
        this.transitionName = 'slide-right'; 
       }else{ 
        this.transitionName = 'slide-left'; 
       } 
       this.$router.isBack=false;
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet">
@import "./css/basic.css";
.main{
  margin-top:70px;
  position:relative;
  width:90%;
  margin-left:10%;
}
.child-view { 
 opacity:1;
 -webkit-transform: translate(0px, 0);
 transform: translate(0px, 0);
 transition: all .5s;
 position:absolute;
 width:100%;
 padding:0 30px;
 
} 
.slide-left-enter, .slide-right-leave-active { 
 -webkit-transform: translate(30px, 0);
 transform: translate(30px, 0);
 opacity: 0; 
}
.slide-left-leave-active, .slide-right-enter { 
 opacity: 0; 
 -webkit-transform: translate(-30px, 0);
 transform: translate(-30px 0);
} 
</style>
