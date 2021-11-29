import React from "react";
import Image from "../../Reusable/Image";

const PhotoCollections = (props) => {
  return (
   
      <div id={props.id} className="rounded-xl overflow-hidden" onClick={props.onOpen}>
        <Image
          id={props.id}
          whclass="w-48 h-48 "
          src={props.image}
          alt="photos"
          isOpacity={true}
        />
      </div>
  );
};

export default PhotoCollections;
