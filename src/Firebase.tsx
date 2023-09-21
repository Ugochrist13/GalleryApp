// // src/firebase.ts
// import firebase from 'firebase/app';
// import 'firebase/auth';

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_GALLERY_API_KEY,
//   authDomain: import.meta.env.VITE_GALLERY_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_GALLERY_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_GALLERY_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_GALLERY_MESSAGE_SENDER_ID,
//   appId: import.meta.env.VITE_GALLERY_APP_ID,
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

// // Access the authentication module
// export const auth = firebase.auth();

// // Create a login function
// export const login = async (email: string, password: string) => {
//   try {
//     const userCredential = await auth.signInWithEmailAndPassword(email, password);
//     return userCredential.user;
//   } catch (error) {
//     throw error;
//   }
// };
