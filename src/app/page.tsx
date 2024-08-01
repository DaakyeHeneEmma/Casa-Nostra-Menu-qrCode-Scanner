import Image from 'next/image'

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
      src={'/menu-breakfast.jpg'}
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
      src={'/menu-food_menu_one.jpg'}
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
      src={'/menu-foods.jpg'}
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
      src={'/menu-soft-drinks.jpg'}
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
      src={'/menu-drinks.jpg'}
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
