import axios from "axios";
import React, { useRef, useState } from "react";

const MultipleInputImgbb = () => {
  const [isUploading, setIsUpLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [imageUrl3, setImageUrl3] = useState("");

  // catch input value by using useRef hook
  const photoRef1 = useRef();
  const photoRef2 = useRef();
  const photoRef3 = useRef();
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
  const stockRef = useRef();
  const discountPriceRef = useRef();
  const currentPriceRef = useRef();

  // Handle Image Upload (image upload by api in imgBB)
  const imageUploadHandler = (event, setImg) => {
    // console.log(event.target.files[0]);

    const imageData = new FormData();
    imageData.set("key", "457810a1f87a20efdef196009d316b7a");
    imageData.append("image", event.target.files[0]);
    imageData.append("image", event.target.files[1]);
    imageData.append("image", event.target.files[2]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImg(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // handle add product and save at the database
  const handleAddProduct = async (e) => {
    e.preventDefault();

    const product = {
      img1: imageUrl1,
      img2: imageUrl2,
      img3: imageUrl3,
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
      stock: stockRef.current.value,
      discountPrie: discountPriceRef.current.value,
      currentPrice: currentPriceRef.current.value,
    };

    console.log(product, "this is product");

    // add product info at mongodb
    try {
      setMessage("");
      const url = "https://fierce-river-40368.herokuapp.com/addService";
      const option = {
        method: "POST",
        body: JSON.stringify(product),
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
        stockRef.current.value = "";
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
              onChange={(e) => imageUploadHandler(e, setImageUrl1)}
              // ref={photoRef1}
              type="file"
              id="img"
              name="image"
              placeholder="Your image.."
            />
          </div>

          <div className="col-75">
            <input
              onChange={(e) => imageUploadHandler(e, setImageUrl2)}
              // ref={photoRef2}
              type="file"
              id="img"
              name="image2"
              placeholder="Your image.."
            />
          </div>

          <div className="col-75">
            <input
              onChange={(e) => imageUploadHandler(e, setImageUrl3)}
              // ref={photoRef3}
              type="file"
              id="img"
              name="image3"
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

        {/* product stock */}
        <div className="row">
          <div className="col-25">
            <label htmlFor="stock" className="label-input">
              Stock
            </label>
          </div>
          <div className="col-75">
            <input
              ref={stockRef}
              type="number"
              id="stock"
              name="stock"
              placeholder="Your product stock.."
            />
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

export default MultipleInputImgbb;
