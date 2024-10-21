import React from 'react'
import HomePage from '../../../components/HomePage'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')

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