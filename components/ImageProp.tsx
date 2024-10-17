    import Image from 'next/image'

    interface ImagesProps {
        source: string
        alt: string
    }

    const Imagery:any = ({source, alt}:ImagesProps) => {
        return (
            <>
            <Image 
                alt={alt}
                src={source}
                width={700}
                height={475}
                sizes="100vw"
                style={{
                    width: "90%",
                    height: 'auto',
                    alignContent:'center',
                    alignItems:'center',
                    alignSelf:'center',
                }}
            />
            </>
        )
    }

    export default Imagery