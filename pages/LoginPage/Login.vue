<template>
    <div id="loginContainer">
        <n-space vertical>
            <n-input type="text" placeholder="Email" round clearable>
                <template #clear-icon>
                    <n-icon :component="TrashBinOutline" />
                </template>
            </n-input>
            <n-input type="password" placeholder="Password" round clearable>
                <template #clear-icon>
                    <n-icon :component="TrashBinOutline" />
                </template>
            </n-input>
        </n-space>
        <div id="buttonContainer">
            <n-button id="buttonSpaceLeft" dashed round type="default" size="large" @click="signIn"> Sign In </n-button>
            <n-button id="buttonSpaceRight" dashed round type="default" size="large" @click="signOut">
                Register
            </n-button>
        </div>
        <pre>{{ credentials }}</pre>
    </div>
</template>

<script>
import { TrashBinOutline } from '@vicons/ionicons5'
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const credentials = ref()
        const signIn = async () => {
            const email = 'endsdlich@deidneMudda.com'
            const password = 'DuHurenSohn'
            credentials.value = await signInUser(email, password)
        }

        const signOut = async () => {
            credentials.value = await signOutUser()
        }
        onMounted(() => {})
        return {
            TrashBinOutline,
            signIn,
            signOut,
            credentials,
        }
    },
})
</script>

<style scoped>
#loginContainer {
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    width: 50%;
    max-width: 350px;
    /* border: 1px solid rgba(126, 192, 121, 0.432); */
    padding: 10px;
}

#buttonSpaceLeft {
    float: left;
    padding: 10px;
    margin-left: 5px;
}
#buttonSpaceRight {
    float: right;
    padding: 10px;
    margin-right: 5px;
}
#buttonContainer {
    margin: auto;
    width: 50%;
    padding-top: 40px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 50px;
}
</style>
