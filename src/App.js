import axios from "axios";
import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [isUploading, setIsUpLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // catch input value by using useRef hook
  const photoRef = useRef();
  const nameRef = useRef();
  const productCodeRef = useRef();
  const descriptionRef = useRef();
  const colorRef = useRef();
  const sizeRef = useRef();
  const weightRef = useRef();
  const giftRef = useRef();
  const categoriesRef = useRef();
  const subCategoriesRef = useRef();
  const childCategoriesRef = useRef();
  const subChildCategoriesRef = useRef();
  const discountPriceRef = useRef();
  const currentPriceRef = useRef();

  // handle image uploader (image upload by api in imgBB)
  const imageUploadHandler = (e) => {
    setIsUpLoading(true);
    const imageData = new FormData();
    imageData.set("key", "ca5482cb4e564b594544191602467167"); // set api key
    imageData.append("image", photoRef.current.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => {
        setImageUrl(res.data.data.url);
        setIsUpLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // handle add service and save at the database
  const handleAddProduct = async (e) => {
    e.preventDefault();

    const service = {
      img: imageUrl,
      name: nameRef.current.value,
      code: productCodeRef.current.value,
      description: descriptionRef.current.value,
      color: colorRef.current.value,
      size: sizeRef.current.value,
      weight: weightRef.current.value,
      gift: giftRef.current.value,
      categories: categoriesRef.current.value,
      subCategories: subCategoriesRef.current.value,
      childCategories: childCategoriesRef.current.value,
      subChildCategories: subCategoriesRef.current.value,
      discountPrie: discountPriceRef.current.value,
      currentPrice: currentPriceRef.current.value,
    };

    console.log(service, "this is service");

    // add service info at mongodb
    try {
      setMessage("");
      const url = "https://fierce-river-40368.herokuapp.com/addService";
      const option = {
        method: "POST",
        body: JSON.stringify(service),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      const response = await fetch(url, option);
      const data = await response.json();
      if (data) {
        setMessage("Your product added into database successfully.");
        nameRef.current.value = "";
        productCodeRef.current.value = "";
        descriptionRef.current.value = "";
        colorRef.current.value = "";
        sizeRef.current.value = "";
        weightRef.current.value = "";
        giftRef.current.value = "";
        categoriesRef.current.value = "";
        subCategoriesRef.current.value = "";
        childCategoriesRef.current.value = "";
        subChildCategoriesRef.current.value = "";
        discountPriceRef.current.value = "";
        currentPriceRef.current.value = "";
      }
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleAddProduct}>
        <div className="row">
          {/* product Image */}
          <div className="col-25">
            <label htmlFor="img" className="label-input">
              Choose a Product photo
            </label>
          </div>
          <div className="col-75">
            <input
              onChange={imageUploadHandler}
              ref={photoRef}
              type="file"
              id="img"
              name="image"
              placeholder="Your image.."
            />
          </div>

          {/* product name */}
          <div className="col-25">
            <label htmlFor="fname" className="label-input">
              Product Name
            </label>
          </div>
          <div className="col-75">
            <input
              ref={nameRef}
              type="text"
              id="fname"
              name="productName"
              placeholder="Your product name.."
            />
          </div>
        </div>

        {/* product code */}
        <div className="row">
          <div className="col-25">
            <label htmlFor="lname" className="label-input">
              Product code
            </label>
          </div>
          <div className="col-75">
            <input
              ref={productCodeRef}
              type="text"
              id="lname"
              name="productCode"
              placeholder="your productCode.."
            />
          </div>
        </div>

        {/* product description */}
        <div className="row">
          <div className="col-25">
            <label htmlFor="description" className="label-input">
              Description
            </label>
          </div>
          <div className="col-75">
            <textarea
              ref={descriptionRef}
              id="description"
              name="description"
              placeholder="Write Description.."
              style={{ height: "200px" }}
            ></textarea>
          </div>
        </div>

        {/* product color  */}
        <div className="row mb-2">
          <div className="col-25">
            <label htmlFor="color" className="label-input">
              Color
            </label>
          </div>
          <div className="col-75">
            <select id="color" name="color" ref={colorRef}>
              <option value="">Chosse a Color</option>
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="black">black</option>
              <option value="green">green</option>
              <option value="yellow">yellow</option>
            </select>
          </div>
        </div>

        {/* product size */}
        <div className="row mb-2">
          <div className="col-25">
            <label htmlFor="size" className="label-input">
              Size
            </label>
          </div>
          <div className="col-75">
            <select id="size" name="color" ref={sizeRef}>
              <option value="">Choose a Size</option>
              <option value="x">x</option>
              <option value="xl">xl</option>
              <option value="xxl">xxl</option>
              <option value="lg">lg</option>
              <option value="md">md</option>
            </select>
          </div>
        </div>

        {/* product Weight */}
        <div className="col-25">
          <label htmlFor="weight" className="label-input">
            Product Weight
          </label>
        </div>
        <div className="col-75">
          <input
            ref={weightRef}
            type="number"
            id="weight"
            name="weight"
            placeholder="Your product weight.."
          />
        </div>

        {/* product Gift */}
        <div className="row mb-2">
          <div className="col-25">
            <label htmlFor="gift" className="label-input">
              Gift
            </label>
          </div>
          <div className="col-75">
            <select id="gift" name="gift" ref={giftRef}>
              <option value="">Choose Gift</option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
        </div>

        {/* product categories */}
        <div className="row mb-2">
          <div className="col-25">
            <label htmlFor="categoris" className="label-input">
              Categries
            </label>
          </div>
          <div className="col-75">
            <select id="categoris" name="categoris" ref={categoriesRef}>
              <option value="">Chosse a cetegoris</option>
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          </div>
        </div>

        {/* product sub categories */}
        <div className="row mb-2">
          <div className="col-25">
            <label htmlFor="sub-categoris" className="label-input">
              Sub-Categries
            </label>
          </div>
          <div className="col-75">
            <select
              id="sub-categoris"
              name="sub-categoris"
              ref={subCategoriesRef}
            >
              <option value="">Chosse a cetegoris</option>
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          </div>
        </div>

        {/* child categories */}
        <div className="row mb-2">
          <div className="col-25">
            <label htmlFor="child-categoris" className="label-input">
              child-Categries
            </label>
          </div>
          <div className="col-75">
            <select
              id="child-categoris"
              name="child-categoris"
              ref={childCategoriesRef}
            >
              <option value="">Chosse a cetegoris</option>
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          </div>
        </div>

        {/* product sub child categories */}
        <div className="row mb-2">
          <div className="col-25">
            <label htmlFor="sub-child-categoris" className="label-input">
              Sub Child Categries
            </label>
          </div>
          <div className="col-75">
            <select
              id="sub-child-categoris"
              name="sub-child-categoris"
              ref={subChildCategoriesRef}
            >
              <option value="">Chosse a Sub Child Categries</option>
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          </div>
        </div>

        {/* product discount price */}
        <div className="row">
          <div className="col-25">
            <label htmlFor="discountPrice" className="label-input">
              Discount price
            </label>
          </div>
          <div className="col-75">
            <input
              ref={discountPriceRef}
              type="number"
              id="discountPrice"
              name="discountPrice"
              placeholder="Your product discountPrice.."
            />
          </div>
        </div>

        {/* product current price */}
        <div className="row">
          <div className="col-25">
            <label htmlFor="currentPrice" className="label-input">
              Current price
            </label>
          </div>
          <div className="col-75">
            <input
              ref={currentPriceRef}
              type="number"
              id="currentPrice"
              name="currentPrice"
              placeholder="Your product discountPrice.."
            />
          </div>
        </div>

        {/* image uploading message by spinner */}
        {isUploading && (
          <div className="font-semibold text-primary ml-2">
            <span className="mr-3 ">Uploading</span>
            <img
              style={{ height: "80px" }}
              src="  https://i.imgur.com/SdfZMWP.gif"
              alt=""
            />
          </div>
        )}

        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>

      {/* success message */}
      <div className="mb-4 mt-5" style={{ color: "green", marginLeft: "50%" }}>
        <h5>{message}</h5>
      </div>
    </div>
  );
};

export default App;

/* eslint-disable no-undef */
// import "./App.css";
// import { useState } from "react";
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState([""]);
//   const [imageURL, setImageUrl] = useState(null);

//   const handleSubmit = () => {};

//   const handleInput = (e) => {
//     const inputInfo = { ...data };
//     inputInfo[e.target.name] = e.target.value;
//     setData(inputInfo);
//   };
//   console.log(data);

//     // Handle Image Upload
//     const handleImageUpload = event =>{
//       console.log(event.target.files[0]);
//       const imageData = new FormData();
//       imageData.set('key', 'a4eb966ac76c6b59719e1a529adae7d6');
//       imageData.append('image', event.target.files[0]);

//       axios.post('https://api.imgbb.com/1/upload',
//           imageData)
//           .then(function (response) {
//               setImageUrl(response.data.data.display_url);
//           })
//           .catch(function (error) {
//               console.log(error);
//           });

//   }
//   return (
//     <div className="container mt-5">
//       <form onSubmit={handleSubmit}>
//         <h5>select your product</h5>
//         <select
//           name="product"
//           className="form-control"
//           required
//           onChange={handleInput}
//         >
//           <option value=""></option>
//           <option value="shirt">This is shirt</option>
//           <option value="pant">this is pant</option>
//         </select>

//         <h5 className="mt-5">select your categoris</h5>
//         <select name="categoris" className="form-control" onChange={handleInput}>
//           <option value=""></option>
//           <option value="BD">BD</option>
//           <option value="US">US</option>
//         </select>
//         <div className="mt-3 ">
//           <label htmlhtmlFor="NameInput" className="form-label">
//             Name
//           </label>
//           <input
//             onChange={handleInput}
//             type="text"
//             name="name"
//             className="form-control"
//             id="NameInput"
//             aria-describedby="emailHelp"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlhtmlFor="exampleInputEmail1" className="form-label">
//             Email address
//           </label>
//           <input
//             onChange={handleInput}
//             type="email"
//             name="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlhtmlFor="priceInput" className="form-label">
//             Price
//           </label>
//           <input
//             onChange={handleInput}
//             type="number"
//             name="price"
//             className="form-control"
//             id="priceInput"
//             aria-describedby="emailHelp"
//           />
//         </div>
//         <input type="file" name="photo" id="" />
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;
