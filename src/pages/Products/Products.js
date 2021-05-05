import React from 'react'
import { InfoSection } from '../../components/InfoSection/InfoSection'
import {HomeObjFour,  HomeObjThree, HomeObjTwo} from './Data';
const Products = () => {
  return (
    <>
      
      <InfoSection {...HomeObjTwo} />
      <InfoSection {...HomeObjThree} />
      <InfoSection {...HomeObjFour} />
    </>
  )
}

export default Products;
