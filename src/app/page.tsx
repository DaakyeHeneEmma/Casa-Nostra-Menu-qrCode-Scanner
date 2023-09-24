import Image from 'next/image'
// import styles from './page.module.css'
import ViewSource from '../../components/view-source'



const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

const Color = () => (
<div>
    <h3>Casa Nostra Menu, Kindly Go Through</h3>
    <Image
      alt="Front Menu"
      src={'/front2.jpg'}
      width={700}
      height={475}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
    <Image
      alt="BreakFast"
      src={'/breakfast_page_1.jpg'}
      width={700}
      height={475}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
    <Image
      alt="Foods"
      src={'/food-screen.jpg'}
      width={700}
      height={475}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
    <Image
      alt="Foods 2"
      src={'/heavy-food.jpg'}
      width={700}
      height={475}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
    <Image
      alt="Drinks"
      src={'/soft-drinks.jpg'}
      width={700}
      height={475}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
    <Image
      alt="Drinks 2"
      src={'/hard-drinks.jpg'}
      width={700}
      height={475}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
    <Image
      alt="Back"
      src={'/front.jpg'}
      width={700}
      height={475}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
  </div>
)

export default Color
