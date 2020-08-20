import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
    apiKey: "AIzaSyAVXrq6pAbA_pC6Q9NMX5KIdAURnAKhL1c",
    authDomain: "inversiones-deportivas.firebaseapp.com",
    databaseURL: "https://inversiones-deportivas.firebaseio.com",
    projectId: "inversiones-deportivas",
    storageBucket: "inversiones-deportivas.appspot.com",
    messagingSenderId: "904689353266",
    appId: "1:904689353266:web:592d75a1dec50bee1a322b"
}

class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)    
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}

	addQuote(quote) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}

		return this.db.doc(`data_users/${this.auth.currentUser.uid}`).set({
			Acc:{
				Permissions:{
					Cal:false,
					Ind:false,
					SegOpe:false,
					RegInd:false,
					Academia:true
				}
			}
		})
	}

	addIndicadores(indicadores) {
		return this.db.doc(`indicadores/dataDiaria`).update({indicadores: indicadores})
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	async getCurrentUserQuote() {
        if(this.auth.currentUser){
            const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
            return quote.get('quote')
        }
	}

	async getIndicadores(){
		if(this.auth.currentUser){
			const indicadores = await this.db.doc(`indicadores/dataDiaria`).get()			
			return indicadores.get('indicadores')
		}
	}
	async getUserData(){
		if(this.auth.currentUser){
			const indicadores = await this.db.doc(`data_users/${this.auth.currentUser.uid}`).get()
			console.log(indicadores)
			return indicadores.get("Acc")
		}
	}
}

export default new Firebase()