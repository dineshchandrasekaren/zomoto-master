import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { MdOutlineDirections } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { SubTitle, SubTitle3 } from "../Reusable/Typography";
const MapView = (props) => {
  const [copied, setCopied] = useState(false);

  function copy() {
    const el = document.createElement("input");
    el.value = props.address;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  }
  return (
    <>
      <SubTitle3 text="Call" />
      <p className="text-zomato-400 text-xl">{props.phno}</p>
      <div className="flex flex-col gap-2">
        <div className="w-full">
          <SubTitle3 text="Direction" />
          <div className="w-full h-48">
            <MapContainer
              center={props.mapLocation}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={props.mapLocation}>
                <Popup className="text-sm">
                  {props.title} <br /> {props.address}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <SubTitle text={props.address} />
        <div className="flex flex-wrap gap-2">
          <button
            className="border border-gray-400 whitespace-nowrap px-3 py-1 flex  items-center rounded-xl text-lg text-gray-500"
            onClick={copy}
          >
            {!copied ? (
              <FaRegCopy className="mr-2" />
            ) : (
              <TiTick className="text-green-600 text-2xl" />
            )}
            {!copied ? " Copy" : " Copied"}
          </button>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${props.mapLocation[0]},${props.mapLocation[1]}`}
            target="_blank"
          >
            <button className="border flex border-gray-400 whitespace-nowrap px-3 gap-2 py-1 items-center rounded-xl text-lg text-gray-500">
              <MdOutlineDirections className="text-zomato-400" /> Direction
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default MapView;
