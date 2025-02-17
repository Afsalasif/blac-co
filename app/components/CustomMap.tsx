"use client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Custom Marker with only FaMapMarkerAlt SVG
const bronzeIcon = L.divIcon({
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="#b08d57" viewBox="0 0 384 512" width="30" height="30">
      <path d="M192 0c106 0 192 86 192 192 0 77.4-54.5 135.2-85.6 170.9l-4.6 5.4c-5.6 6.7-11 13-16 19-10 11.5-19 21.5-25.8 31.6C249.2 439.6 224 478.1 224 512H160c0-33.9-25.2-72.4-36-93.1-6.8-10.1-15.8-20.1-25.8-31.6-5-6-10.4-12.3-16-19l-4.6-5.4C54.5 327.2 0 269.4 0 192 0 86 86 0 192 0zm0 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"/>
    </svg>
  `,
  className: "custom-pin",
  iconSize: [30, 30], // Controls the icon size
  iconAnchor: [15, 30], // Centers the icon properly
});

const CustomMap = () => {
  const router = useRouter()

  const latitude: number = 25.276987;
  const longitude: number = 55.296249;
  const center: [number, number] = [latitude, longitude];

  
  return (
    <div className="w-full h-[450px] md:h-[550px] relative overflow-hidden flex flex-col gap-4">
      <MapContainer
        center={center}
        zoom={14}
        scrollWheelZoom={false}
        className="w-full h-[400px] md:h-[500px]"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          
        />
        <Marker position={[latitude, longitude]} icon={bronzeIcon} />
      </MapContainer>

      <button
        onClick={() => router.push('/contactus')}
        className="hover:scale-105 font-raleway text-metallic-bronze transition-all border-[#b08d57] hover:border-[#8a6e40]"
      >
        Take Me There
      </button>
    </div>
  );
};

export default CustomMap;
