import Image from 'next/image';



const Card = () => {
    // const styles = {
    //     banner: {
    //       display: 'flex',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       height: '400px', 
    //       overflow: 'hidden',
    //     },
    //   };
  return (
    <>
      {/* Simple Small Image Card */}
      <div className="flex justify-center mt-8 pt-10">
        <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg w-1/3"> {/* Set width to 1/3 */}
          <Image 
            src="/images/IMG_9270.jpg" // Update with your image path
            alt="Small Image Card"
            // layout="responsive"
            width={228} // Adjusted width for small card
            height={156} // Adjusted height for small card
          />
          <div className="p-2">
            <h3 className="text-sm font-semibold">Small Image Card</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
