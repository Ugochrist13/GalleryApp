import React, { useEffect, useState } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend"; // Import the HTML5Backend
import update from "immutability-helper";
import SearchBar from "../components/SearchBar";
import Loading from "../assets/loads.gif";
import Footer from "../components/Footer";
import { IoMdMenu } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface Image {
  id: number;
  src: string;
  title: string;
  tag: string;
}

const ItemType = "IMAGE";

const ImageItem: React.FC<{
  image: Image;
  index: number;
  moveImage: (fromIndex: number, toIndex: number) => void;
}> = ({ image, index, moveImage }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => {
        ref(node);
        drop(node);
      }}
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-[320px] text-gray-700 hover:text-hover sm:h-[250px] p-2 transition-transform transform hover:scale-105 hover:shadow-lg"
    >
      <img
        src={image.src}
        alt={image.title}
        className="w-full h-[88%] rounded-lg"
      />
      <p className="text-center mt-1">{image.tag}</p>
    </div>
  );
};

const ImageGallery: React.FC<{ images: Image[] }> = ({ images }) => {
  const [imageList, setImageList] = useState<Image[]>([]);
  const [filteredImages, setFilteredImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading for 2 seconds (replace with your fetch logic)
    setTimeout(() => {
      // Fetch the JSON data from the public folder or API
      fetch("../../public/imageData/Images.json")
        .then((response) => response.json())
        .then((data) => {
          setImageList(data);
          // setFilteredImages(data);
          setLoading(false); // Set loading to false when data is loaded
        })
        .catch((error) => console.error("Error fetching images:", error));
    }, 2000); // Simulate a 2-second loading delay
  }, []);

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredImages(imageList);
    } else {
      const filtered = imageList.filter((image) =>
        image.tag.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredImages(filtered);
    }
  };

  const logout = () => {
    navigate("/");
  };

  const displayedList = filteredImages.length > 0 ? filteredImages : imageList;

  const moveImage = (fromIndex: number, toIndex: number) => {
    const draggedImage = displayedList[fromIndex];

    // Remove the dragged image from the array
    const updatedList = displayedList.filter((_, index) => index !== fromIndex);

    // Insert the dragged image at the new position
    updatedList.splice(toIndex, 0, draggedImage);

    filteredImages.length > 0
      ? setFilteredImages(updatedList)
      : setImageList(updatedList);
  };

  return (
    <div className="mx-auto p-4">
      <div className="w-full p-2 flex justify-between mb-8 items-center">
        <h2 className="lg:text-3xl font-bold text-bg text-center">
          Gent Gallery
        </h2>
        <div className="flex items-center">
          <button onClick={logout} className="text-bg hover:text-hover mr-4">
            Logout
          </button>
          <div className="hamburger-menu">
            <IoMdMenu className="text-2xl text-white bg-pink-600 rounded-full p-1" />
          </div>
        </div>
      </div>
      <SearchBar onSearch={handleSearch} />
      <DndProvider backend={HTML5Backend}>
        {loading ? (
          <div className="w-full h-96 flex items-center justify-center">
            <img src={Loading} alt="" />
          </div>
        ) : (
          <div className="flex flex-wrap -mx-2">
            {displayedList.map((image, index) => (
              <ImageItem
                key={image.id}
                image={image}
                index={index}
                moveImage={moveImage}
              />
            ))}
          </div>
        )}
      </DndProvider>
      <div className="w-full mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default ImageGallery;
