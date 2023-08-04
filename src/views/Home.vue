<script>
import clickOutSide from "@mahdikhashan/vue3-click-outside";
export default {
  directives: {
    clickOutSide,
  },
  data: () => ({
    isPhoneShow: false,
    isEmailShow: false,
    hoverStyle: {
      display: "block"
    },
  }),
  methods: {
    closingPhone() {
      this.isEmailShow = false
        this.isPhoneShow = !this.isPhoneShow
    },
    closingEmail() {
      this.isPhoneShow = false
        this.isEmailShow = !this.isEmailShow
    },
    onClickOutside () {
      this.isPhoneShow = false
      this.isEmailShow = false
    }
  },
}
</script>
<template>
  <div class="wrapper" v-cloak>
    <div class="column">
      <div class="firstRow">
        NETTOM
        <span class="greyText">24</span>
      </div>
      <div class="secondRow" v-click-out-side="onClickOutside" >
        <div class="icon-wrapper hoverGrayColor">
          <font-awesome-icon icon="fa-solid fa-square-phone"
           @click="closingPhone()" class="iconSocial"/>
        </div>
        <div class="icon-wrapper hoverGrayColor">
           <font-awesome-icon icon="fa-solid fa-square-envelope"
           @click="closingEmail()" class="iconSocial"/>
        </div>
        <div class="icon-wrapper">
          <a href="https://www.instagram.com/nettom24com" target="_blank" rel="noopener noreferrer" tabIndex="-3">
            <font-awesome-icon icon="fa-brands fa-square-instagram" class="iconSocial"/> 
          </a>
        </div>
        <div class="icon-wrapper">
          <a href="https://www.facebook.com/nettom24" target="_blank" rel="noopener noreferrer"
            tabIndex="-4">
            <font-awesome-icon icon="fa-brands fa-square-facebook"  class="iconSocial"/>
          </a>
        </div>
        
      </div>
    </div>
  </div>
  <div class="dashboard">
    <div class="content">   
      <div class="wrapperPhoneNumber"
           :style="isPhoneShow ? hoverStyle : null" >
        <a href="tel: +48.512893100"> +48.512893100</a>
      </div>     
      <div class="wrapperEmail" :style="isEmailShow ? hoverStyle : null"
          >
        <a href="mailto:biuronettom24@gmail.com" target="_blank" rel="noopener noreferrer">
          biuronettom24@gmail.com
        </a>
      </div>    
    </div>
  </div>
  <router-view />
</template>