import React, { useState } from "react";
import Image from "../Reusable/Image";
import ImageViewer from "react-simple-image-viewer";
const MenuCollections = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const onOpen=() =>setIsViewerOpen((prev) => !prev);
   const onClose=()=> setIsViewerOpen((prev) => !prev);
  
  return (<>
    {isViewerOpen && (
        <ImageViewer
          src={props.images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ onClose }
        />
      )}
    <div className="flex flex-col rounded-lg overflow-hidden flex-start" onClick={onOpen}>
      <Image
        whclass={props.className}
        src={props.images[0]}
        alt={props.alt}
        isOpacity={true}
      />
      <h3>{props.menuTitle}</h3>
      <small className="text-gray-500">{props.pages} pages</small>
    </div>
    </>
  );
};

export default MenuCollections;
