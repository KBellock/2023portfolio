import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const MessageBoardPost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleImageSelect = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!selectedImage || !title || !description || !content) return;

    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child('images/' + selectedImage.name);
    const uploadTask = imageRef.put(selectedImage);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error('Image upload error:', error);
      },
      async () => {
        const imageURL = await uploadTask.snapshot.ref.getDownloadURL();

        // Now save the post data along with the imageURL in Firestore
        const firestore = firebase.firestore();
        await firestore.collection('posts').add({
          title,
          description,
          content,
          imageURL,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        // Reset form fields and state
        setTitle('');
        setDescription('');
        setContent('');
        setSelectedImage(null);
        setUploadProgress(0);
      }
    );
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="file" onChange={handleImageSelect} />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Submit Post</button>
      </form>

      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
    </div>
  );
};

export default MessageBoardPost;
