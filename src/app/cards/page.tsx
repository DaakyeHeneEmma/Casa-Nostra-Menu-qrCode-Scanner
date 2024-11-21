"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';

const Card = () => {
    const [hu, setHu] = useState<any>(null); // State for hu
    const data: any = [
        { data: "/imge.jpg", id: 1 },
        { data: "/imge2.jpg", id: 2 },
        { data: "/imge3.jpg", id: 3 },
        { data: "/img4.jpg", id: 4 },
        { data: "/img5.jpg", id: 5 },
    ];

    return (
        <>
            <div>
                <div style={{
                    padding: "2em",
                    border: "1px solid blue",
                    alignContent: 'center',
                    textAlign: "center"
                }}>
                    {hu !== null ? (
                        <Image
                            src={data.find((item:any )=> item.id === hu)?.data} // Find the image source based on hu
                            alt={`Image ID: ${hu}`}
                            width={428}
                            height={356}
                        />
                    ) : (
                        "No image selected" // Display message when no image is selected
                    )}
                </div>
                {data.map((item: any) => (
                    <div key={item.id} style={{
                    //     display: "grid", // Use grid layout
                    // gridTemplateColumns: "repeat(3, 1fr)", // Create 3 equal columns
                    // gap: "10px", // Space between grid items
                    // marginTop: "19px"
                    }}>
                        <CardComponent source={item.data} alt="msg" id={item.id} setHu={setHu} />
                    </div>
                ))}
            </div>
        </>
    );
};

function CardComponent({ id, source, alt, setHu }: any) { // Accept setHu as a prop
    const handleClick = (): any => {
        setHu(id); // Use setHu to update the state in Card
        console.log(id);
    }

    return (
        <div
        style={{
            display: "grid", // Use grid layout
        gridTemplateColumns: "repeat(2, 3fr)", // Create 3 equal columns
        gap: "10px", // Space between grid items
        marginTop: "10px"
         }} >
            <Image
                src={source}
                alt={alt}
                width={80}
                height={70}
                onClick={handleClick}
            />
        </div>
    )
}

export default Card;
