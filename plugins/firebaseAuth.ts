import { initializeApp } from 'firebase/app'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: config.firebaseApiKey,
        authDomain: config.firebaseAuthDomain,
        projectId: config.firebaseProjectId,
        storageBucket: config.firebaseStorageBucket,
        messagingSenderId: config.firebaseMsgId,
        appId: config.firebaseAppId,
        measurementId: config.firebaseMeasurementId,
    }

    // Initialize Firebase
    const app = initializeApp(firebaseConfig)
    console.log(app, 'APP')
})
