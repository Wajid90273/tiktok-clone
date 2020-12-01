// import firebase from 'firebase';
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAXwfi3LRQ8wr9n6uvsaOVYEWyYyd23SNE",
  authDomain: "tiktok-clone-4393f.firebaseapp.com",
  databaseURL: "https://tiktok-clone-4393f.firebaseio.com",
  projectId: "tiktok-clone-4393f",
  storageBucket: "tiktok-clone-4393f.appspot.com",
  messagingSenderId: "281251344637",
  appId: "1:281251344637:web:449887ed0640823433ce94",
  measurementId: "G-SB3XTQB88M"
};
const firebaseApp =firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;