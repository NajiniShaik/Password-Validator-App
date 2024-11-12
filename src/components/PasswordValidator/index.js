import {useState} from 'react'

import {
  BgContainer,
  DetailedContainer,
  HeadingElement,
  DescriptionElement,
  CardElement,
  InputElement,
  ErrMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => setPassword(event.target.value)

  return (
    <BgContainer>
      <DetailedContainer>
        <CardElement first>
          <HeadingElement>Password Validator</HeadingElement>
          <DescriptionElement>
            Check how strong and secure is your password
          </DescriptionElement>
        </CardElement>
        <CardElement>
          <InputElement type="password" onChange={onChangePassword} />
          {password.length < 8 ? (
            <ErrMsg>Your password must be at least 8 characters</ErrMsg>
          ) : null}
        </CardElement>
      </DetailedContainer>
    </BgContainer>
  )
}

export default PasswordValidator
