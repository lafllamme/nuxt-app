import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

/* exports async for funcs */

/* register user */
export const createUser = async (email, password) => {
    const auth = getAuth()
    const credentials = await createUserWithEmailAndPassword(auth, email, password).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
    })
    return credentials
}

/* logs in existing user */
export const signInUser = async (email, password) => {
    const auth = getAuth()
    const credentials = await signInWithEmailAndPassword(auth, email, password).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
    })
    return credentials
}

/* observers user */
// User is signed in, see docs for a list of available properties
// https://firebase.google.com/docs/reference/js/firebase.User
export const userStatus = async (email, password) => {
    const auth = getAuth()
    const authState = await onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid
            console.log(user, uid)
        } else {
            // User is signed out
            // ...
            console.log('Logged out ', user)
        }
    })
}

export const signOutUser = async () => {
    const auth = getAuth()
    const response = await auth.signOut()
    console.log('Sign Out:', response)
    return response
}
