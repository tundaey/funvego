import firebase from 'react-native-firebase'

export function auth(){
    
}

export function saveUser(user){

}

export function checkIfAuthed(store){
    return store.getState().user.isAuthed
}

export function login(email, password){
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

export function signUp(email, password){
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export function logout(){
    return firebase.auth().signOut()
}