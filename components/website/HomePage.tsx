import Image from 'next/image';

const MainPage = () => {
    const styles = {
        banner: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '400px', // Adjust height as needed
          overflow: 'hidden',
          marginBottom: "20px", 
        }
      };

  return (
    <>
      <div style={styles.banner}>
        <Image 
          src={`https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/images/IMG_9270.jpg?t=2024-10-21T12%3A29%3A29.279Z`}
          alt="Banner Image"
          layout="responsive"
          width={200}
          height={400}
        />
      </div>
      {/* Container for Image Cards */}
      <div>Site Coming Soon</div>
  
    </>
  );
};

export default MainPage;
