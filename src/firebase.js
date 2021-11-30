import firebase from "firebase";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCEAToAhCpQWMgxwAmDtLgDeQE4EhIgt2Y",
    authDomain: "comanda-inteligente.firebaseapp.com",
    databaseURL: "https://comanda-inteligente-default-rtdb.firebaseio.com",
    projectId: "comanda-inteligente",
    storageBucket: "comanda-inteligente.appspot.com",
    messagingSenderId: "170777450390",
    appId: "1:170777450390:web:b16597525a5cacd86bafb7",
    measurementId: "G-6FNFPJ83D6"
};



export default firebase.initializeApp(firebaseConfig);
export const database = firebase.database();