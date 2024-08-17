import ImageItem from "./components/ImageItem"
import HeaderBox from "./components/HeaderBox"
import { useGetImages } from "./hooks/useGetImages"


function App() {

  const { randomImgs, isLoading } = useGetImages()

  return (
    <main className="w-full h-screen">
      <section className="w-full lg:w-[800px] mx-auto">
        <HeaderBox />
        <p className="text-black py-5 text-2xl font-semibold text-center">
          Select an image to get started
        </p>
        <section className="w-full  px-5 lg:px-0 grid lg:grid-cols-2 gap-5">
          {randomImgs.map(image => (
            <>
              <ImageItem key={image.id} image={image} />
            </>
          ))}
        </section>
      </section>
    </main>
  )
}

export default App;
