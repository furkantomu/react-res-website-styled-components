import React from 'react'
import { InfoSection } from '../../components/InfoSection/InfoSection'
import {HomeObjFour, HomeObjOne, HomeObjThree, HomeObjTwo} from './Data';
const Home = () => {
  return (
    <>
      <InfoSection {...HomeObjOne} />
      <InfoSection {...HomeObjTwo} />
      <InfoSection {...HomeObjThree} />
      <InfoSection {...HomeObjFour} />
    </>
  )
}

export default Home
