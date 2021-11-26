import React from "react";
import Image from "../Reusable/Image";
import { FiCamera } from "react-icons/fi";

const ImageGrid = (props) => {
  return (
    <div className="md:px-2 lg:px-0">
      {/* flex */}
      <div className="w-full h-72 md:h-80 lg:h-96   mx-auto my-4  flex flex-nowrap gap-2 ">
        <Image
          isOpacity={true}
          alt="restraurent_image"
          src={props.src[0]}
          whclass="w-11/12 md:w-4/6 mx-auto h-full"
        />

        {/* grid */}
        <div className="hidden w-2/5 md:grid grid-cols-2 grid-row-2 gap-2">
          <Image
            isOpacity={true}
            alt="restraurent_image"
            src={props.src[1]}
            whclass="w-full h-full"
          />
          <div className="w-full relative cursor-pointer overflow-hidden h-full ">
            <div className=" flex items-center overflow-hidden  w-full h-full justify-center bg-black bg-opacity-40 absolute">
              <p className="text-white font-light  text-lg ">View Gallery</p>
            </div>
            <Image
              isOpacity={false}
              alt="restraurent_image"
              src={props.src[3]}
              whclass="w-full h-full"
            />
          </div>
          <Image
            isOpacity={true}
            alt="restraurent_image"
            src={props.src[2]}
            whclass="w-full h-full"
          />
          <div className="w-full h-full cursor-pointer overflow-hidden relative ">
            <div className="flex items-center w-full flex-col h-full justify-center absolute">
              <div className="w-11 shadow-md h-11 mb-1 flex items-center justify-center rounded-full bg-gray-500">
                <FiCamera className="text-xl text-gray-100" />
              </div>
              <p className="drop-shadow-md text-white text-lg font-light ">
                Add Photo
              </p>
            </div>
            <Image
              isOpacity={false}
              alt="restraurent_image"
              src="https://b.zmtcdn.com/data/zomaland/a6750d1975cd3139cb91535088efb0c71578913426.jpeg?"
              whclass="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
