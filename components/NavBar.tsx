'use client';
import { LogOut, Settings, User } from 'lucide-react';
import Link from 'next/link';
import React, { use } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ToggleTheme } from './ToggleTheme';
import { SidebarTrigger, useSidebar } from './ui/sidebar';
import { Button } from './ui/button';

const NavBar = () => {
const { toggleSidebar} = useSidebar();

  return (
    <nav className='p-4 flex items-center justify-between'>
      {/* LEFT SIDE */}
      <SidebarTrigger />
      {/* <Button variant='outline' onClick={toggleSidebar}>
        custom button
      </Button> */}
      {/* RIGHT SIDE */}
      <div className='flex items-center gap-4'>
        <Link href='/'>Dashboard</Link>
        {/* THEME (light/dark mode selection) MENU */}
        <ToggleTheme />        
        {/* USER MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            {' '}
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className='h-[1.2rem] w-[1.2rem] mr-2' />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className='h-[1.2rem] w-[1.2rem] mr-2' />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant='destructive'>
              <LogOut className='h-[1.2rem] w-[1.2rem] mr-2' />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default NavBar;
