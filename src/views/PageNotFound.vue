<template>
    <div class="wrapper" v-cloak>
        <div>
<img :src="image" />
        </div>
        <div>Strona pod tym adresem nie istnieje</div>
        <div>Zapraszamy do  <router-link to="/"> strony głównej</router-link></div>
        
    </div>
</template>


<script>
import image from "../assets/images/icon.png"
export default {
    name: "PageNotFound",   
    data: function () {
        return {
            image: image
        }
    }
}
</script>
<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
}

.wrapper div:first-of-type img{
    display: block;
    width: 30px;
    height: auto;
    margin-bottom: 20px;
}

.wrapper div:nth-child(2) {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
}

.wrapper div:nth-child(3) {
    font-size: 24px;
}
</style>