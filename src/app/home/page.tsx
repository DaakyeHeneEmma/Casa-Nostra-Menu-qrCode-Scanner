import React from 'react'
import HomePage from '../../../components/HomePage'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(`${process.env.NEXT_PUBLIC_SUPABASE_URL}`, 'public-anon-key')

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