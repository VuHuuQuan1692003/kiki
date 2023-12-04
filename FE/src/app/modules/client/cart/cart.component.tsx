import { FunctionComponent, useEffect } from 'react'
import { css } from '@emotion/react'
import LeftCart from './components/leftCart/leftCart.component'
import RightCart from './components/rightCart/rightinner.component'
import { Skeleton } from 'antd'
import { useCartRedux } from '../redux/hook/useCartReducer'
interface CartProps {
  props?: any
}

const Cart: FunctionComponent<CartProps> = () => {
  const accessToken = localStorage.getItem('accessToken')
  const {
    data: { carts },
    actions
  } = useCartRedux()
  useEffect(() => {
    actions.getAllCart()
  }, [])
  localStorage.removeItem('total');
  localStorage.removeItem('sale');
  localStorage.removeItem('voucherCode');
  return (
    <>
      {accessToken ? (
        carts.length <= 0 ? (
          <div className='m-auto mt-16 w-[300px]'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lPL5-AheM5iaLdtwYA9_u09ggaYn0TR5b4M6ji2nQUaVKZEwTkjzCfo2d6d4zu7Zf-4&usqp=CAU'
              alt=''
            />
          </div>
        ) : (
          <div css={cssCart} className='box-cart'>
            <div className='flex'>
              <div className='left-cart'>
                <div className='title'>
                  <h1>Giỏ Hàng</h1>
                </div>
                <LeftCart />
              </div>
              <div className='right-cart'>
                <RightCart />
              </div>
            </div>
          </div>
        )
      ) : (
        <Skeleton active />
      )}
    </>
  )
}
export default Cart
const cssCart = css`
  width: 1380px;
  margin: auto;
  margin-top: 20px;
  .title {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 40px;
    color: rgb(0, 0, 0);
    line-height: 28px;
    text-transform: uppercase;
    flex-basis: calc(797px);
  }
  .left-cart {
    padding: 0px 15px;
    width: 80%;
  }
  .right-cart {
    padding: 0px 10px;
    width: 25%;
    margin-top: 40px;
  }
  // Mobile: w< 740px
  @media only screen and (max-width: 739px) {
    width: 100%;
    display: unset;
    width: auto;
    .title {
      display: none;
    }
    .flex {
      display: block;
    }
    .left-cart {
      width: 100%;
    }
    .right-cart {
      width: 100%;
      display: inline-block;
    }
  }
`
