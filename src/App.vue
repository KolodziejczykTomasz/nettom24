<script setup>

</script>

<template>
 <div class="body">
  <div class="wrapper">
    <div class="column">
      <div class="firstRow">
        NETTOM
        <span class="greyText">24</span>
      </div>
      <div class="secondRow">
        <div>
          <PhoneIcon />
        </div>
        <div>
          <MailIcon />
        </div>
        <div>
          <a href="https://www.facebook.com/KolodziejczykTomasz44" target="_blank" rel="noopener noreferrer"
            tabIndex="-3">
            <FacebookIcon />
          </a>
        </div>
        <div>
          <a href="https://github.com/KolodziejczykTomasz" target="_blank" rel="noopener noreferrer" tabIndex="-4">
            <GithubIcon />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="dashboard">
    <div class="content">   
      <div>
        <a href="tel: +48.512893100"> +48.512893100</a>
      </div>     
      <div>
        <a href="mailto:tomaszkolodziejczyk@wp.pl" target="_blank" rel="noopener noreferrer">
          tomaszkolodziejczyk@wp.pl
        </a>
      </div>    
    </div>
  </div>
 </div>
</template>

<style scoped>
*,
    *::before,
    *::after {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  
    html {
      font-size: 62.5%;
    }
  
    .body {
      margin: 0;
      font-size: 1.6rem;
      padding: 0;
      width: 100vw;
      height: 100vh;
      overflow-y: hidden;
      overflow-x: hidden;
      background-color: rgb(33, 42, 57);
      font-family: Montserrat, Arial;
      border: 2px solid black;
    }
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      color: rgb(0, 212, 99);
      border: 2px solid blue;
    }
    .greyText {
      transition: ease-in-out .4s;
    }
    .column {
        display: grid;
        position: relative;
        grid-template-rows: 1fr 1fr;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 150px;
        cursor: pointer;
        border: 2px solid green;
    }
      .dashboard {
        display: flex;
        width: 100vw;
        height: 50px;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        bottom: 20vh; 
        border: 2px solid red;       
      }
</style>
