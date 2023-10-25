<script setup>
import { clickOutSide as vClickOutSide } from "@mahdikhashan/vue3-click-outside";
import {ref } from 'vue';

const isPhoneShow = ref(false);
const isEmailShow = ref(false);


const closingPhone = () =>{
      isEmailShow.value = false
       isPhoneShow.value = !isPhoneShow.value
    };
const closingEmail = () =>{
      isPhoneShow.value = false
        isEmailShow.value = !isEmailShow.value
    };
 const onClickOutside = () =>{
      isPhoneShow.value = false
      isEmailShow.value = false
    };
 

</script>
<template>
  <div class="wrapper" v-cloak>
    <div class="column">
      <div class="firstRow" >
        NETTOM
        <span class="greyText">24</span>
      </div>
      <div class="secondRow" v-click-out-side="onClickOutside">
        <div class="icon-wrapper hoverGrayColor">
          <font-awesome-icon :icon="['fa-solid', 'fa-square-phone']"
           @click="closingPhone" class="iconSocial"/> 
        </div>
        <div class="icon-wrapper hoverGrayColor">
           <font-awesome-icon :icon="['fa-solid', 'fa-square-envelope']"
            @click="closingEmail" class="iconSocial"/>         
        </div>
        <div class="icon-wrapper">
          <a href="https://www.instagram.com/nettom24com" target="_blank" rel="noopener noreferrer" tabIndex="-3">
            <font-awesome-icon :icon="['fa-brands', 'fa-square-instagram']"  class="iconSocial"/> 
          </a>
        </div>
        <div class="icon-wrapper">
          <a href="https://www.facebook.com/nettom24" target="_blank" rel="noopener noreferrer"
            tabIndex="-4">
            <font-awesome-icon :icon="['fa-brands', 'fa-square-facebook']" class="iconSocial"/>
          </a>
        </div>        
      </div>
    </div>
  </div>
  <div class="dashboard" >
    <div class="content" >   
      <div :class="[{ wrapperPhoneNumber: !isPhoneShow }, hoverStyle]" >
        <a href="tel: +48.512893100"> +48.455444100</a>
      </div>     
      <div :class="[{ wrapperEmail: !isEmailShow }, hoverStyle]" >
        <a href="mailto:biuro@nettom24.com" target="_blank" rel="noopener noreferrer">
          biuro@nettom24.com
        </a>
      </div>    
    </div>
  </div>
</template>
<style>
.wrapperPhoneNumber {
  display: none;
}

.wrapperEmail {
  display: none;
}

.hoverStyle {
  display: "block"
}
</style>