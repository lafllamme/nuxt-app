<template>
    <div><NuxtLayout name="header"> Hello world! </NuxtLayout> <Login /></div>
</template>
<script>
import Login from './LoginPage/Login.vue'

export default {
    name: 'Index',
    components: {
        Login,
    },
}
</script>
