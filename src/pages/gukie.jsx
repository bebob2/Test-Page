import styled, { css } from 'styled-components'
import Router from 'next/router'

const Div = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`

function Guki() {
  return (
    <Div>
      <div
        onClick={() => {
          console.log('Clicked!!!!')
          // Router.push('https://github.com/ibqn')
          window.open('https://github.com/ibqn', '_blank')
        }}
        css={css`
          cursor: pointer;

          &:hover {
            font-size: 120px;
            //font-weight: 600;
            color: darkblue;
          }
        `}
      >
        Hello Guk
      </div>
    </Div>
  )
}

export default Guki
