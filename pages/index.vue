<script setup>
import Login from './LoginPage/Login.vue'
</script>
<script>
export default defineComponent({
    setup() {
        onMounted(() => {
            useHead({
                bodyAttrs: {
                    class: 'backgroundAnimation',
                },
            })
        })
    },
})
</script>

<template>
    <!-- <div>
        <NuxtLayout name="header"> Hello world! </NuxtLayout> -->
    <div class="backgroundAnimation"><Login /></div>

    <!-- </div> -->
</template>
<style>
html {
    background: linear-gradient(-45deg, #d13100, #000000, #009ad2, #147961) !important;
    background-size: 300% 300% !important;
    animation: gradient 15s ease infinite;
    -webkit-animation: gradient 30s ease infinite;
    -moz-animation: gradient 30s ease infinite;
    height: 100vh !important;

    /* opacity: 0.8; */
    /* left: -50%;
    position: fixed;
    right: -50%;
    top: 0; */
    /* z-index: -1; */
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>
