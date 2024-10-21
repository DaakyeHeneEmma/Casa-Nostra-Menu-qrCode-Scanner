import Image from 'next/image';
import Card from './Card';
import { text } from 'stream/consumers';



const MainPage = () => {
    const styles = {
        banner: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '400px', // Adjust height as needed
          overflow: 'hidden',
        },
        cardContainer: {
          display: 'flex',
          justifyContent: 'center',
          // flexWrap: 'wrap', // Allow wrapping of cards
          marginTop: '1rem',
        },
        card: {
          width: '23%', // Set width to approximately one-fourth of the container
          backgroundColor: '#E5E7EB', // Equivalent to Tailwind's bg-gray-200
          borderRadius: '0.5rem', // Rounded corners
          overflow: 'hidden',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Shadow effect
          margin: '0.5rem', // Margin between cards
        },
        image: {
          width: '100%', // Make image responsive
          height: 'auto', // Maintain aspect ratio
        },
        title: {
          padding: '0.5rem', // Padding for title
          fontSize: '0.875rem', // Font size for title
          fontWeight: '600', // Bold title
          color:"black"
        },
      };

  return (
    <>
      <div style={styles.banner}>
        <Image 
          src="/images/IMG_9270.jpg"
          alt="Banner Image"
          layout="responsive"
          width={200}
          height={400}
        />
      </div>
      {/* Container for Image Cards */}
    <div style={styles.cardContainer}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} style={styles.card}>
            <Image 
              src={`/images/chips.jpg`} // Update with your image paths
              alt={`Small Image Card ${index + 1}`}
              style={styles.image}
              layout="responsive"
              width={128} // Adjusted width for small card
              height={96} // Adjusted height for small card
            />
            <div style={styles.title}>
              Small Image Card
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainPage;
