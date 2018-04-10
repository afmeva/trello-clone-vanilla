import firebase from 'firebase'

import { createApp } from '_core/virtual-dom'

import view from '_components/form/form'
import store from './store/store'

const app = createApp({
  store,
  view,
  rootNode: document.querySelector('.app')
})
app.render()
store.onChange(app.render)

firebase.initializeApp({
  apiKey: "AIzaSyD15J0oSJXODzVRPtQcHvtTLF78HNNFLGM",
  authDomain: "trello-clone-30eb4.firebaseapp.com",
  databaseURL: "https://trello-clone-30eb4.firebaseio.com",
  projectId: "trello-clone-30eb4",
  storageBucket: "trello-clone-30eb4.appspot.com",
  messagingSenderId: "411006033442"
});



