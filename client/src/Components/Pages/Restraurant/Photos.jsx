import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import PhotoCollections from "../../Restraurant/Photos/PhotoCollections";
const Photos = () => {
  const [photos, setPhotos] = useState([
    "https://b.zmtcdn.com/data/pictures/5/65155/7398da37ab73c4c7cb16ac860e577369.jpg?",
    "https://b.zmtcdn.com/data/menus/213/3000213/a5b1c6615a6160942b9411e4127ebcec.jpg?",
    "https://b.zmtcdn.com/data/pictures/5/65155/7398da37ab73c4c7cb16ac860e577369.jpg?",
    "https://b.zmtcdn.com/data/menus/213/3000213/a5b1c6615a6160942b9411e4127ebcec.jpg?",
    "https://b.zmtcdn.com/data/pictures/5/65155/7398da37ab73c4c7cb16ac860e577369.jpg?",
    "https://b.zmtcdn.com/data/menus/213/3000213/a5b1c6615a6160942b9411e4127ebcec.jpg?",
  ]);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const onOpen = (e) => {
    setCurrentImage(() => Number(e.target.id));
    setIsViewerOpen((prev) => !prev);
  };
  const onClose = () => setIsViewerOpen((prev) => !prev);
  return (
    <>
      {isViewerOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={onClose}
        />
      )}
      <div className="flex flex-wrap gap-3 lg:ml-0 ml-2 mt-4 w-full h-full">
        {photos.map((image, id) => (
          <PhotoCollections id={id} image={image} onOpen={onOpen} />
        ))}
      </div>
    </>
  );
};

export default Photos;
