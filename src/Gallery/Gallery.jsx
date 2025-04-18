import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://api.allorigins.win/raw?url=https://api.jsonbin.io/v3/b/67fd53fc8960c979a5850737')
      .then((res) => {
        setImages(res.data.record);
        setLoading(false); // Set loading to false when images are fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false on error as well
      });
  }, []);

  return (
    <div>
      <section>
        <h2>Gallery</h2>
        <div className="Gallerypart">
          <h2>Beautiful Memories</h2>
          <p>Passion Makes Perfection</p>
        </div>
        {loading ? (
          <p>Please wait Loading images... </p> // Show loading text while images are being fetched
        ) : (
          <div className="gallery-container">
            {images.map((x, index) => (
              <img key={index} src={x.image} alt="" loading="lazy" height="365px" />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;
