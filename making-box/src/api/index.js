import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const API_KEY = process.env.VUE_APP_FIREBASE_API_KEY
const AUTH_DOMAIN = process.env.VUE_APP_FIREBASE_AUTH_DOMAIN
const DATABASE_URL = process.env.VUE_APP_FIREBASE_DATABASE_URL
const PROJECT_ID = process.env.VUE_APP_FIREBASE_PROJECT_ID
const STORAGE_BUCKET = process.env.VUE_APP_FIREBASE_STORAGE_BUCKET
const MESSAGINGSENDERID = process.env.VUE_APP_FIREBASE_MESSAGINGSENDERID
const APP_ID = process.env.VUE_APP_FIREBASE_APP_ID
const MEASUREMENTID = process.env.VUE_APP_FIREBASE_MEASUREMENTID

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APP_ID,
  measurementId: MEASUREMENTID
}

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()

export default {
  loginWithGoogle() {
		let provider = new firebase.auth.GoogleAuthProvider()
		return firebase.auth().signInWithPopup(provider).then(function(result) {
			return result
		}).catch(function(error) {
      return error
		})
  },
  getBoxes() {
    const boxCollection = firestore.collection('box')
    return boxCollection.orderBy('boxIdx', 'desc').get().then((snapshot) => {
      return snapshot.docs.map((doc) => {
        return doc.data()
      })
    })
  },
  postBox(data) {
    firestore.collection('box').get().then((snapshot) => {
      let boxCount = snapshot.docs.length
      let boxIdx = snapshot.docs[boxCount - 1].data().boxIdx + 1
      const boxCollection = firestore.collection('box').doc(boxIdx.toString())
      data['boxIdx'] = boxIdx
      return boxCollection.set({ ...data })
    })
  }
}