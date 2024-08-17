import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { SelectedImage } from '@/types/imageTypes';


interface ModalProps {
  selectedImg: SelectedImage;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ selectedImg, closeModal }) => {


  const [userName, setUserName] = useState('')
  const [user, setUser] = useState('')
  const cardRef = useRef<HTMLImageElement>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (userName.trim() !== '') {
      setUser(userName)
    }
    setUserName('')
  }

  // utils
  const formatUserName = (user: string) => {
    const fileName = user.trim().split(' ')
    return fileName.join('_')
  }


  const handleDownload = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current);
      // document.body.appendChild(canvas);
      const link = document.createElement('a');
      link.download = `${formatUserName(user)}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click()
      // link.remove()
    }
  };
  // onClick={e => e.stopPropagation()}
  return (
    <main className='fixed inset-y-0 left-0 bg-black/40 w-full lg:flex lg:items-center lg:justify-center'>
      <section className='w-full lg:w-[780px] relative p-4 h-full lg:h-[650px] bg-gray-100 rounded-xl overflow-y-scroll'>

        <button onClick={closeModal} className='absolute top-3 right-2 text-2xl font-bold lg:right-5 lg:top-5'>
          X
        </button>

        <div className='w-full flex justify-center flex-col items-center'>
          <form onSubmit={handleSubmit} className='w-full'>
            <p className='py-4 text-xs lg:text-xl text-center'>You have selected imageId: {selectedImg.id}</p>
            <div className='lg:flex w-[92%] mx-auto gap-5 justify-center items-center'>
              <input
                type="text"
                value={userName}
                name='userName'
                onChange={handleChange}
                placeholder='Enter your name'
                className='border outline-none border-gray-400 block lg:w-[350px] rounded-xl p-2 capitalize focus:border-red-200 w-full'
              />
              <button
                disabled={!userName}
                className={`py-2 rounded-xl px-8 text-white mt-5 lg:mt-0 w-full lg:w-auto ${!userName ? 'bg-black/10' : 'bg-black'}`}>
                Generate Card
              </button>
            </div>
          </form>

          <div className='relative mt-5 w-[92%] lg:w-full mx-auto'>
            <img
              ref={cardRef}
              src={selectedImg.urls.regular}
              alt="random image"
              className='h-[400px] w-full rounded-xl object-cover'
            />
            {user && <div className='absolute bg-black/40 rounded-xl w-full inset-y-0 left-0  text-white p-7'>
              <div className='w-full flex h-full flex-col justify-between items-center text-2xl lg:text-3xl'>
                <p className='font-semibold'>Thank You</p>
                <p className='capitalize font-semibold'>{user}</p>
              </div>
            </div>}
          </div>

          {user &&
            <button className='bg-black px-7 lg:w-[350px] py-2 text-white mt-5 rounded-xl' onClick={handleDownload}>
              Download card
            </button>
          }
        </div>
      </section>
    </main>
  );
}

export default Modal;
