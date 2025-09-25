import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { LayoutDashboard, PenBox } from 'lucide-react'
import { checkUser } from '@/lib/checkUser'

const Header = async () => {
  await checkUser();
  return (
    <div className='fixed top-0 bg-white w-full z-50 shadow'>
      <nav className='flex items-center justify-between px-8 py-4'>
        {/* Logo on the left */}
        <Link href='/'>
          <div className='font-semibold text-black text-4xl align-middle font-[sans]'>Fin<span className='bg-gradient-to-br from-blue-900 to-blue-600 font-extrabold tracking-tighter pr-2 pb-2 text-transparent bg-clip-text'>SightAI</span></div>
        </Link>
        {/* Right side nav items */}
        <div className='flex items-center gap-4'>
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline" className="text-black flex items-center gap-2">
                <LayoutDashboard />
                <span className='hidden md:inline'>Dashboard</span>
              </Button>
            </Link>
            <Link href="/transaction/create">
              <Button variant="outline" className="text-black flex items-center gap-2 hover:bg-black hover:text-white">
                <PenBox size={18} />
                <span className='hidden md:inline'>Add Transaction</span>
              </Button>
            </Link>

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                }
              }}
            />
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant='outline'>Login</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </div>
  )
}

export default Header