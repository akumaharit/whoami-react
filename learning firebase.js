import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAByJnmkHFiY3u7LgSrKNijk345sCmjZBQ",
    authDomain: "whoami-d2445.firebaseapp.com",
    projectId: "whoami-d2445",
    storageBucket: "whoami-d2445.appspot.com",
    messagingSenderId: "481385015102",
    appId: "1:481385015102:web:2eb0d2ff3d1d0c1ce7ae6f"
  };

const db = getFirestore();
const app = initializeApp(firebaseConfig);
const citiesRef = db.collection('cities');



await citiesRef.doc('SF').set({
  name: 'San Francisco', state: 'CA', country: 'USA',
  capital: false, population: 860000
});
await citiesRef.doc('LA').set({
  name: 'Los Angeles', state: 'CA', country: 'USA',
  capital: false, population: 3900000
});
await citiesRef.doc('DC').set({
  name: 'Washington, D.C.', state: null, country: 'USA',
  capital: true, population: 680000
});
await citiesRef.doc('TOK').set({
  name: 'Tokyo', state: null, country: 'Japan',
  capital: true, population: 9000000
});
await citiesRef.doc('BJ').set({
  name: 'Beijing', state: null, country: 'China',
  capital: true, population: 21500000
});