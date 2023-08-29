import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imageURL, setImageURL] = useState(null);

  const handleImageSelect = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  const handleImageUpload = () => {
    if (!selectedImage) return;

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
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          setImageURL(downloadURL);
        });
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={handleImageSelect} />
      <button onClick={handleImageUpload}>Upload Image</button>

      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
      {imageURL && <img src={imageURL} alt="Uploaded" />}
    </div>
  );
};

export default ImageUpload;
