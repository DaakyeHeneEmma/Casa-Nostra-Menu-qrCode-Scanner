import React from 'react'
import HomePage from '../../../components/HomePage'

interface ImagesProps {
    source: string
    alt: string
}

const Home:any = ({source, alt}:ImagesProps) => {
    return (
        <>
        <HomePage />
        </>
    )
}

export default Home