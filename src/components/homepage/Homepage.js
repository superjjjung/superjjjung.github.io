import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const DemoHeader = styled.div`
    font-size: 50px;
    padding-left: 400px;
    padding-top: 30px;
`

export const DemoP = styled.div`
    font-size: 20px;
    padding-left: 400px;
`

export const VidContainer = styled.div`
    height: 100px;
    width: 80%;
    //padding: 100px;
    max-width: 800px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`

export const HomepageContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HompageH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HompageP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
    font-size: 24px;
    }

    @media screen and (max-width: 480px) {
    font-size: 18px;
    }
`

export const HompageBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`