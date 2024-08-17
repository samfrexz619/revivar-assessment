import { ImageType } from '@/types/imageTypes';
import React from 'react';

interface ImageItemProps {
  image: ImageType;
}

const ImageItem: React.FC<ImageItemProps> = ({ image }) => {
  return (
    <img
      src={image.urls.small_s3}
      alt={image.alt_description}
      className="w-full h-[350] lg:h-[250px] object-cover rounded-xl shadow-md"
    />
  );
}

export default ImageItem;
