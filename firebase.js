import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDWI1zUx0xysgghXeqAuRLdgpsOEUPPDbw',
  authDomain: 'retrievestuff.firebaseapp.com',
  databaseURL: 'https://retrievestuff.firebaseio.com',
  projectId: 'retrievestuff',
  storageBucket: 'retrievestuff.appspot.com',
  messagingSenderId: '405644005520',
  appId: '1:405644005520:web:fdedb08c46ebe3bd25c815',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
