
import { logout, login, signUp } from "../../helpers/auth";
import { formatUserInfo } from "../../utils/utils"

const LOADING = 'LOADING'
const ACTION_COMPLETED = 'ACTION_COMPLETED'
const AUTH_USER = 'AUTH_USER'
const UNAUTH_USER = 'UNAUTH_USER'
const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
const REMOVE_FETCHING_USER = 'REMOVE_FETCHING_USER'

export function initiateAction(){
    return {
        type: LOADING
    }
}

export function actionCompleted(){
    return {
        type: ACTION_COMPLETED
    }
}

export function authUser(uid){
    return {
        type: AUTH_USER,
        uid
    }
}

export function fetchUser(){
    return {
        type: FETCHING_USER
    }
}

export function fetchingUserSuccess(user, uid){
    return {
        type: FETCHING_USER_SUCCESS,
        user
    }
}

export function fetchingUserFailure(error){
    return {
        type: FETCHING_USER_FAILURE,
        error: 'Invalid email or password'
    }
}

export function unAuthUser(){
    return {
        type: UNAUTH_USER
    }
}

export function removeFetching(){
    return {
        type: REMOVE_FETCHING_USER
    }
}

export function loginAndHandleUser(email, password){
    return function(dispatch){
        dispatch(initiateAction())
        return login(email, password).then((user)=> {
            const userData = user._user.providerData[0]
            const userInfo = formatUserInfo(userData.displayName, userData.photoURL, userData.uid)
            const uid = user._user.uid
            dispatch(authUser(uid))
            dispatch(fetchingUserSuccess())
            dispatch(actionCompleted())
        }).catch((error)=> {
            dispatch(fetchingUserFailure(error))
            dispatch(actionCompleted())
        })
    }
}

export function signUpAndHandleUser(email, password){
    return function(dispatch){
        dispatch(initiateAction())
        return signUp(email, password).then((user)=> {
            const userData = user._user.providerData[0]
            const userInfo = formatUserInfo(userData.displayName, userData.photoURL, userData.uid)
            const uid = user._user.uid
            dispatch(authUser(uid))
            dispatch(fetchingUserSuccess())
            dispatch(actionCompleted())
        }).catch((error)=> {
            dispatch(fetchingUserFailure(error))
            dispatch(actionCompleted())
        })
    }
}

export function logoutAndUnAuth(){
    return function(dispatch){
        logout()
        dispatch(unAuthUser())        
    }
}

const initialState = {
    isFetching: false,
    loading: false,
    error: '',
    isAuthed: false,
    authedId: ''
}

export default function user(state = initialState, action){
    switch(action.type){
        case AUTH_USER:{
            return {
                ...state,
                isAuthed: true,
                authedId: action.uid
            }
        }

        case UNAUTH_USER:{
            return {
                ...state,
                isAuthed: false,
                authedId: ''
            }
        }

        case FETCHING_USER: {
            return {
                ...state,
                isFetching: true
            }
        }

        case FETCHING_USER_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                user: action.user
            }
        }

        case FETCHING_USER_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        }

        case REMOVE_FETCHING_USER: {
            return {
                ...state,
                isFetching: false
            }
        }

        case LOADING: {
            return {
                ...state,
                loading: true,
                error: ''
            }
        }

        case ACTION_COMPLETED: {
            return {
                ...state,
                loading: false
            }
        }

        default:
            return state
    }

    

}