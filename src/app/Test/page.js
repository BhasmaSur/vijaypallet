// pages/index.js
"use client";
import { useState } from "react";

const itemPara = [
  "We are manufacturer and supplier of wooden packaging boxes. We give our customers quality products and being the best wooden boxes manufacturer in Pune.",
  "These wooden boxes are manufactured after heat treated treatment of wood. Because of this treatment, we give you the assurance of high quality wooden box.",
  "We provide high quality products as per the industrial requirements. We are famous wooden boxes manufacturer in Pune because of our quality products and timely delivery.",
  "Products are listed as packaging box, wooden plywood box.",
];

const itemHeading = {
  h5: "Wooden Boxes",
  h6: "Features of Wooden Boxes",
};

const features = ["Compact Designs", "User Friendly", "Good Quality"];
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Open Modal
      </button>

      {/* Modal Component */}
      
    </div>
  );
}
