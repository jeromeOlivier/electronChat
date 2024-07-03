import firebase from 'firebase/app';
import 'firebase/auth';

export async function register({ email, password}) {
  try {
    return await firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    return Promise.reject(error.message);
  }
}