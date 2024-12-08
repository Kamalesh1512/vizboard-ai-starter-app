"use client"
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CircleAlert } from 'lucide-react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './mode-toggle'


const font = Poppins({
  subsets:["latin"],
  weight:"600"
})

function Header() {

  return (
    <div className='w-full z-50 flex justify-between items-center p-5
                    border-b rounded-md bg-primary/10 h-16'>
        {/* // Logo */}
        <div className='flex items-center'>
        <Image src='/logo.png' width={40} height={40} alt='logo'/>
        <h1 className={cn("hidden md:block text-xl md-text-3xl font-bold text-primary ml-5",font.className)}>
        VizBoardAI
        </h1>
        </div>
        <div className='flex items-center gap-x-3'>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfhNisCYYQDDsDZabb2N9s3xAUrjALQm2MiCEIhbnuPPs87ew/viewform"
            target='_blank'
            rel='noopener noreferrer' passHref>
            <Button variant="premium">
              Notify Me
              <CircleAlert/>
            </Button>
            </Link>
            <ModeToggle/>
        </div>
    </div>
  )
};

export default Header;