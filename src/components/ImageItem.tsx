import React from 'react';
import { ImageType, SelectedImage } from '@/types/imageTypes';

interface ImageItemProps {
  image: ImageType;
  onSelectedImg: (image: SelectedImage) => void;
  handleModal: () => void;
}

const ImageItem: React.FC<ImageItemProps> = (props) => {
  const { image, onSelectedImg, handleModal } = props;

  const handleSelectedImage = () => {
    const selected = {
      urls: image.urls,
      id: image.id
    }
    onSelectedImg(selected)
    handleModal()
  }

  return (
    <img
      src={image.urls.small_s3}
      alt={image.alt_description}
      onClick={handleSelectedImage}
      className="w-full image h-[250px] cursor-pointer rounded-xl shadow-md"
    />
  );
}
// h-[350] cursor-pointer lg:h-[250px] object-cover
export default ImageItem;
