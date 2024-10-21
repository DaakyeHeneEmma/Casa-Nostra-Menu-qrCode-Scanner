import React from 'react';
import Link from 'next/link';

const MenuBar = () => {
  return (
    <div 
        style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f8f8f8' }}>
            <Link href={'/'} passHref>
              <img src="/images/logo_cn.jpg" alt="Logo" style={{ height: '45px', marginRight: '20px' }} />
            </Link>
      <Link href={'/home'} passHref>
      <button style={{ padding: '10px 40px ', cursor: 'pointer' }}>Visit Our Website</button>
      </Link>
    </div>
  );
};

export default MenuBar;
