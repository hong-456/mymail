<template>
  <div>
    <home>
      <item link="/home" activeColor="rgb(255, 42, 42)">
        <template v-slot:img>
          <img src="~@/assets/img/tagbar/home.png" alt="">
        </template>
        <template v-slot:img2>
          <img src="~assets/img/tagbar/home1.png" alt="">
        </template>
        <template v-slot:text>
          <div>首页</div>
        </template>
      </item>
       <item link="/find" activeColor="rebeccapurple">
        <template v-slot:img>
          <img src="@/assets/img/tagbar/find.png" alt="">
        </template>
        <template v-slot:img2>
          <img src="../assets/img/tagbar/find1.png" alt="">
        </template>
        <template v-slot:text>
          <div>发现</div>
        </template>
      </item>
       <item link="/chat" activeColor="yellow">
        <template v-slot:img>
          <img src="../assets/img/tagbar/chat.png" alt="">
        </template>
        <template v-slot:img2>
          <img src="../assets/img/tagbar/chat1.png" alt="">
        </template>
        <template v-slot:text>
          <div>聊天</div>
        </template>
      </item>
       <item link="/my" activeColor="deeppink">
        <template v-slot:img>
          <img src="../assets/img/tagbar/user.png" alt="">
        </template>
         <template v-slot:img2>
          <img src="../assets/img/tagbar/user1.png" alt="">
        </template>
        <template v-slot:text>
          <div>我的</div>
        </template>
      </item>
    </home>
  </div>
</template>
<script>
import home from "./tagbar/tagbar"
import item from "./tagbar/tagbarItem"
  export default {
    name:'',
    data(){
      return {
        
      }
    },
    components:{
    home,
    item
    }
  }
</script>
<style lang=''>
  
</style>