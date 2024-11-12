import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DetailedContainer = styled.div`
  background-image: linear-gradient(to bottom, #383a4e, #475569);
  background-size: cover;
  box-shadow: 0px 0px 5px #434451;
  padding: 20px;
  border-radius: 12px;
  height: 50vh;
`

export const HeadingElement = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    font-size: 44px;
  }
`

export const DescriptionElement = styled.p`
  color: #f8fafc;
  font-size: 14px;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const CardElement = styled.div`
  text-align: center;
  padding-bottom: ${props => (props.first ? '70px' : '0px')};
`

export const InputElement = styled.input`
  background-color: #edeeff;
  height: 40px;
  width: 100%;
  outline: none;
  border: none;
  padding: 5px 10px;
`

export const ErrMsg = styled.p`
  color: #ef4444;
  font-size: 14px;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    font-size: 16px;
  }
`
