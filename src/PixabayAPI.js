import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import axios from "axios";
import "./App.css";

function PixabayAPI({ query }) {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchImage = async () => {
      const response = await axios.get(
        `https://pixabay.com/api/?key=43429373-f32987f9e677429801cae9d3d&q=${query}&image_type=photo&pretty=true`
      );
      setImage(response.data.hits[5]);
    };
    fetchImage();
  }, [query]);
  return (
    <div>{image && <Image src={image.webformatURL} className="images" />}</div>
  );
}

export default PixabayAPI;
