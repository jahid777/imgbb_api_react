import React, { useState } from "react";
import axios from "axios";
function SimpleInputWithSubmission() {
  const [imageURL, setImageUrl] = useState(null);
  const [imageURL2, setImageUrl2] = useState(null);
  const [imageURL3, setImageUrl3] = useState(null);
  // Handle Image Upload
  const handleImageUpload = (event, setImg) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "ca5482cb4e564b594544191602467167");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImg(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      img1: imageURL,
      img2: imageURL2,
      img3: imageURL3,
    };
    console.log(product);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          id="img"
          type="file"
          onChange={(e) => handleImageUpload(e, setImageUrl)}
        />
        <input
          className="form-control"
          id="img2"
          type="file"
          onChange={(e) => handleImageUpload(e, setImageUrl2)}
        />
        <input
          className="form-control"
          id="img3"
          type="file"
          onChange={(e) => handleImageUpload(e, setImageUrl3)}
        />
        <br />

        <input className="btn btn-primary" value="Add Service" type="submit" />
        <br />
        <br />
      </form>
      <p>Image Url 1: {imageURL}</p>
      <p>Image Url 2: {imageURL2}</p>
      <p>Image Url 3: {imageURL3}</p>
    </div>
  );
}

export default SimpleInputWithSubmission;
