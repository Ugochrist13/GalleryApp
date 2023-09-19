import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import update from 'immutability-helper';

interface Image {
  id: number;
  src: string;
  title: string;
  tag: string;
}

const ItemType = 'IMAGE';

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
    <div ref={(node) => ref(drop(node))} style={{ cursor: 'grab' }}>
      <img src={image.src} alt={image.title} />
      <p>{image.tag}</p>
    </div>
  );
};

const ImageGallery: React.FC<{ images: Image[] }> = ({ images }) => {
  const [imageList, setImageList] = useState<Image[]>(images);

  const moveImage = (fromIndex: number, toIndex: number) => {
    const draggedImage = imageList[fromIndex];
    setImageList(
      update(imageList, {
        $splice: [
          [fromIndex, 1],
          [toIndex, 0, draggedImage],
        ],
      })
    );
  };
  

  return (
    <div>
      <h2>Image Gallery</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {imageList.map((image, index) => (
          <ImageItem
            key={image.id}
            image={image}
            index={index}
            moveImage={moveImage}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
