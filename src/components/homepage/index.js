import React from 'react'
import { VidContainer, DemoHeader, DemoP } from './Homepage'
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'
import demo from '../../videos/demo_final.mp4'

const Homepage = () => {
  return(
    <>
      <DemoHeader>
        Demo 
      </DemoHeader>
      <DemoP>
        This is what I have for now. I can indentify some faces of screen recordings. 
      </DemoP>
      <VidContainer>
        <Video autoplay loop>
          <source src={demo} type="video/webm" />
        </Video>
      </VidContainer>
    </>
  )
}

export default Homepage