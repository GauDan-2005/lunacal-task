import { useState } from "react";
import { icons } from "../../constants/image";
import Card from "../Card/Card";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);

  const visibleImages = images.slice(currIndex, currIndex + 3);

  const handlePrevious = () => {
    setCurrIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrIndex((prevIndex) =>
      prevIndex >= images.length - 3 ? 0 : prevIndex + 1
    );
  };

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageURL = URL.createObjectURL(file);
      setImages([...images, { src: newImageURL }]);
    }
  };

  return (
    <Card>
      <div className="flex flex-col gap-6 self-stretch justify-start h-full">
        <div className="flex justify-between items-center self-stretch">
          <div className="flex py-3 px-8 items-center rounded-2xl bg-[#171717]">
            <p className="text-center text-base font-medium not-italic text-white">
              Gallery
            </p>
          </div>
          <div className="flex justify-center items-center gap-8">
            <div className="relative flex py-2 px-6 justify-center items-center rounded-full bg-[#fff]/[.03] backdrop-blur-custom-blur shadow-custom-shadow-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-[#fff]/[.1]">
              <p className="text-white text-center text-base not-italic font-semibold">
                + Add Image
              </p>
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleAddImage}
              />
            </div>
            <div className="flex justify-center items-center gap-6">
              <img
                className="w-10 hover:brightness-125 transition-all cursor-pointer duration-300"
                src={icons.arrow_left}
                alt="Previous"
                onClick={handlePrevious}
              />
              <img
                className="w-10 hover:brightness-125 transition-all duration-300 cursor-pointer"
                src={icons.arrow_right}
                alt="Next"
                onClick={handleNext}
              />
            </div>
          </div>
        </div>
        {images.length === 0 ? (
          <div className="flex justify-center items-center gap-5 self-stretch flex-grow cursor-pointer">
            <p className="text-5xl text-[#969696]">No Images</p>
            <img className="w-20" src={icons.add_image} />
          </div>
        ) : (
          <div className="grid grid-cols-3 justify-start items-center gap-4 py-2 overflow-visible">
            {visibleImages.map((img, idx) => (
              <div
                key={idx}
                className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-square"
              >
                <img
                  src={img.src}
                  alt={`Image ${idx + 1}`}
                  className="rounded-3xl object-cover w-full h-full transition-all duration-300 hover:scale-105 hover:shadow-custom-hover hover:rotate-2 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default Gallery;
