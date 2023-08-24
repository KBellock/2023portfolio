// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

 // Import the functions you need from the SDKs you need
import { addDoc, collection, getDocs } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: "portfolio-4f2ed",
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);
export const db = getFirestore(app);


export async function addPost(title, desc, img, content, username) {
  const docRef = await addDoc(collection(db, "posts"), {
    title: title,
    desc: desc,
    img: img,
    content: content,
    username: username,
  });
  console.log("Document written with ID: ", docRef.id);
}

export async function getPosts() {
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

export async function getPost(id) {
  const docRef = doc(db, "posts", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

export async function deletePost(id) {
  await deleteDoc(doc(db, "posts", id));
  console.log("Document successfully deleted!");
}

export async function updatePost(id, title, desc, img, content, username) {
  const docRef = doc(db, "posts", id);
  await updateDoc(docRef, {
    title: title,
    desc: desc,
    img: img,
    content: content,
    username: username,
  });
  console.log("Document successfully updated!");
}

export async function addUser(username, email, password) {
  const docRef = await addDoc(collection(db, "users"), {
    username: username,
    email: email,
    password: password,
  });
  console.log("Document written with ID: ", docRef.id);
}

export async function getUser(id) {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

export async function deleteUser(id) {
  await deleteDoc(doc(db, "users", id));
  console.log("Document successfully deleted!");
}

export async function updateUser(id, username, email, password) {
  const docRef = doc(db, "users", id);
  await updateDoc(docRef, {
    username: username,
    email: email,
    password: password,
  });
  console.log("Document successfully updated!");
}

export async function addComment(username, content) {
  const docRef = await addDoc(collection(db, "comments"), {
    username: username,
    content: content,
  });
  console.log("Document written with ID: ", docRef.id);
}

export async function getComments() {
  const querySnapshot = await getDocs(collection(db, "comments"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

export async function getComment(id) {
  const docRef = doc(db, "comments", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

export async function deleteComment(id) {
  await deleteDoc(doc(db, "comments", id));
  console.log("Document successfully deleted!");
}

export async function updateComment(id, username, content) {
  const docRef = doc(db, "comments", id);
  await updateDoc(docRef, {
    username: username,
    content: content,
  });
  console.log("Document successfully updated!");
}

export async function addLike(username, postId) {
  const docRef = await addDoc(collection(db, "likes"), {
    username: username,
    postId: postId,
  });
  console.log("Document written with ID: ", docRef.id);
}

export async function getLikes() {
  const querySnapshot = await getDocs(collection(db, "likes"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

export async function getLike(id) {
  const docRef = doc(db, "likes", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

export async function deleteLike(id) {
  await deleteDoc(doc(db, "likes", id));
  console.log("Document successfully deleted!");
}

export async function submitForm(name, email, message) {
  const docRef = await addDoc(collection(db, "ContactFormSub"), {
    name: name,
    email: email,
    message: message,
  });
  console.log("Document written with ID: ", docRef.id);
}