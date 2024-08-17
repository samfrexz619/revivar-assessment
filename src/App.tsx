import { useState } from "react";
import ImageItem from "./components/ImageItem";
import HeaderBox from "./components/HeaderBox";
import { useGetImages } from "./hooks/useGetImages";
import Modal from "./components/Modal";
import { SelectedImage } from "./types/imageTypes";


function App() {

  const { randomImgs } = useGetImages()

  const [selectedImg, setSelectedImg] = useState<SelectedImage | null>(null)
  const [showModal, setShowModal] = useState(false)

  const handleSelectedImage = (image: SelectedImage) => {
    setSelectedImg(image)
  }

  const handleModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <main className="w-full h-screen bg-gray-300">
      <section className="w-full lg:w-[800px] mx-auto">
        <HeaderBox />
        <p className="text-black py-5 text-[16px] lg:text-2xl font-semibold text-center">
          Select an image to get started
        </p>
        <section className="w-full  px-5 lg:px-0 grid lg:grid-cols-2 gap-5">
          {randomImgs.map(image => (
            <>
              <ImageItem
                key={image.id}
                image={image}
                onSelectedImg={handleSelectedImage}
                handleModal={handleModal}
              />
            </>
          ))}
        </section>
      </section>
      {showModal && <Modal selectedImg={selectedImg!} closeModal={handleModal} />}
    </main>
  )
}

export default App;
