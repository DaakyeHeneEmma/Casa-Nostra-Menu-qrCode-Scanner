"use client"

import Image from 'next/image';
import { NextUIProvider } from '@nextui-org/react';
import { Button } from '@nextui-org/react';

const MainPage = () => {
    const styles = {
        banner: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '400px', 
          overflow: 'hidden',
          marginBottom: "20px", 
        }
      };

  return (
    <div>

      <div style={styles.banner}>
        <Image 
          src={`https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/images/IMG_9270.jpg?t=2024-10-21T12%3A29%3A29.279Z`}
          alt="Banner Image"
          layout="responsive"
          width={200}
          height={400}
          />
      </div>
      <div style={{
        height:'100%',
        width:'50%',
        backgroundColor:"#F5F5F5",
        borderRadius:'5%',
        alignContent:"center",
        wordWrap:"normal",
        alignItems:'center',
        alignSelf:"center",
        margin:"3%"
      }}>
         <Image 
          src={`https://kxxclxmmdkyrcsvsptqp.supabase.co/storage/v1/object/public/website/images/IMG_9270.jpg?t=2024-10-21T12%3A29%3A29.279Z`}
          alt="Banner Image"
          layout="responsive"
          width={200}
          height={400}
        
          />
          <h2 style={{marginLeft:"3%", paddingTop:"2%"}}>Food Name</h2>
          <div style={{ display: 'flex', flexDirection: 'row',  
              justifyContent:"space-between", margin:"3%", alignItems: 'center' }}>
          <p>Description</p>
           <Button style={{padding:"3%"}}>Buy Item</Button>
          </div>

      </div>

    </div>
  );
};

export default MainPage;
