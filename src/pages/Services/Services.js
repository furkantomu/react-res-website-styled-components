import React from 'react'
import { InfoSection } from '../../components/InfoSection/InfoSection'
import {HomeObjThree,HomeObjFour} from './Data';


const Services = () => {
  return (
    <>
      
      
      <InfoSection {...HomeObjThree} />
      <InfoSection {...HomeObjFour} />
    </>
  )
}

export default Services;
