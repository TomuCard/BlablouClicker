import React from 'react'
import useGameStore from '@storeGame'
import Clicker from '@partials/Clicker.jsx'
import ContainerShop from '@partials/ContainerShop.jsx'
import useTick from '@partials/Tick.jsx'
import useAutoSave from './store/useLocalStorage.jsx'


function App() {
  const { blablou, globalBlablou } = useGameStore();
  useAutoSave();
  useTick();

  return (
    <div className='flex flex-row w-screen h-screen justify-between'>
      {/* <Tick /> */}
      <p className='p-3 text-neutral-600 text-sm absolute top-0 leading-0'>Total Blablou : {globalBlablou}</p>
      <div className='w-fit flex flex-col gap-12 text-3xl mx-auto mt-[15vh]'>
        <h1 className='text-center'>Blablou : <br /> {blablou}</h1>
        <Clicker />
      </div>
      <ContainerShop />
    </div>
  )
}

export default App
