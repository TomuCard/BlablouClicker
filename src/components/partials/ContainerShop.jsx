import React from 'react'
import Shop from '@partials/Shop.jsx'
// import useGameStore from '@storeGame'
import useAutoClickStore from '@storeAutoClick';
import useClickPowerStore from '@storeClickPower';

export default function ContainerShop() {
  const { clickPowerPrice, clickPowerAmount, upgradeClickPower } = useClickPowerStore();
  const { autoClickerPrice, autoClickerAmount, upgradeAutoClick } = useAutoClickStore();

  return (
    <section className='h-screen w-1/4 bg-amber-300'>
      <Shop price={clickPowerPrice} amount={clickPowerAmount} click={upgradeClickPower} title='CLICK POWER' />
      <Shop price={autoClickerPrice} amount={autoClickerAmount} click={upgradeAutoClick} title='AUTO CLICKER' />
    </section>
  )
}
