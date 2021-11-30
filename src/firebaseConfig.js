import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyCEAToAhCpQWMgxwAmDtLgDeQE4EhIgt2Y",
    authDomain: "comanda-inteligente.firebaseapp.com",
    databaseURL: "https://comanda-inteligente-default-rtdb.firebaseio.com",
    projectId: "comanda-inteligente",
    storageBucket: "comanda-inteligente.appspot.com",
    messagingSenderId: "170777450390",
    appId: "1:170777450390:web:5222da8c46d690a86bafb7",
    measurementId: "G-Y9WRDENJ5F"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase