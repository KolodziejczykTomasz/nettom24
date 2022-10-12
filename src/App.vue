<script>

export default {
  data: () => ({
    isPhoneShow: false,
    isEmailShow: false,
    hoverStyle: {
      display: "block"
    },
  }),
  components: {},
  methods: {
    closingPhone() {
      this.isEmailShow = false,
        this.isPhoneShow = !this.isPhoneShow
    },
    closingEmail() {
      this.isPhoneShow = false,
        this.isEmailShow = !this.isEmailShow
    },
    closeMouseMove() {
      this.isPhoneShow = false,
        this.isEmailShow = false
    }
  }
}
import ClickOutside from 'vue-click-outside'
</script>
<template>
  <div class="wrapper">
    <div class="column">
      <div class="firstRow">
        NETTOM
        <span class="greyText">24</span>
      </div>
      <div class="secondRow">
        <div class="icon-wrapper">
        <font-awesome-icon icon="fa-solid fa-square-phone" @click="closingPhone()" ClickOutside="closeMouseMove()"/>
        </div>
        <div class="icon-wrapper">
         <font-awesome-icon icon="fa-solid fa-square-envelope" @click="closingEmail()" ClickOutside="closeMouseMove()"/>
        </div>
        <div class="icon-wrapper">
          <a href="https://www.facebook.com/KolodziejczykTomasz44" target="_blank" rel="noopener noreferrer"
            tabIndex="-3">
            <font-awesome-icon icon="fa-brands fa-square-facebook" />
          </a>
        </div>
        <div class="icon-wrapper">
          <a href="https://github.com/KolodziejczykTomasz" target="_blank" rel="noopener noreferrer" tabIndex="-4">
            <font-awesome-icon icon="fa-brands fa-square-github" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="dashboard">
    <div class="content">   
      <div class="wrapperPhoneNumber" :style="isPhoneShow ? hoverStyle : null">
        <a href="tel: +48.512893100"> +48.512893100</a>
      </div>     
      <div class="wrapperEmail" :style="isEmailShow ? hoverStyle : null">
        <a href="mailto:tomaszkolodziejczyk@wp.pl" target="_blank" rel="noopener noreferrer">
          tomaszkolodziejczyk@wp.pl
        </a>
      </div>    
    </div>
  </div>
</template>
