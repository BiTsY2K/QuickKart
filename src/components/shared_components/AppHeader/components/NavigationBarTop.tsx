// import Link from 'next/link';
// import { pathOr } from 'ramda';
// import Logo from '../BrandLogo/BrandLogoImage';
// import { headerNavData } from '@/data/content';
// import { HiOutlineShoppingBag } from "react-icons/hi2";
// import ToggleSwitch from '@/shared/Button/ToggleSwitch';
// import Input from '@/shared/Input/Input';
// import Logo from '@/shared/Logo/Logo';

// import CartSideBar from '../CartSideBar';
// import Countries from '../Countries';
// import Language from '../Language';
// import type { NavItemType } from '../NavItem';
// import UserAccount from '../UserAccount';
// import CatalogBar from './CatalogBar';
// import MenuBar from './MenuBar';

import React from 'react';
import { RiShoppingBagLine, RiUser6Line } from 'react-icons/ri';

import { Button } from '@/components/ui/button';

import BrandLogo from '@/components/shared_components/BrandLogo/BrandLogo';
import PrimaryNavigationMenu from '@/components/shared_components/AppHeader/components/NavigationMenuPrimary';
import { LanguageSelector } from '@/components/LanguageSelector';
import { ProductSearchInputBar } from '@/components/ProductSearchInputBar';

const TopNavigationBar = () => {
  // const navLinks: NavItemType[] = pathOr([], ['mainNavLinks'], headerNavData);
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between gap-4 px-2 py-2">
        <div className="relative flex items-center gap-2 xl:grow">
          <BrandLogo className="order-2 md:order-1" brandImgClasses="" brandNameClasses="" />
          <PrimaryNavigationMenu className="order-1 md:order-2" />
          {/* <CatalogBar className="hidden xl:inline-block" /> */}

          {/* Product Search Input Bar - Large (Desktop) Devices*/}
          <div className="hidden xl:flex w-full order-3">
            <ProductSearchInputBar className="" />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-0.5">
          <div className=" lg:inline-block">
            <LanguageSelector variant={'HEADER'} isDeviceMobile={false} className="" />
          </div>
          <div className="flex items-center space-x-1">
            {/* User Button */}
            <Button variant={"ghost"} size={"icon"} aria-label="" className="size-10 rounded-full cursor-pointer">
              <span className="h-6 w-6 items-center justify-center pointer-events-none">
                <RiUser6Line className="size-6 pointer-events-none" />
              </span>
            </Button>

            {/* Shopping Bag Button */}
            <Button variant={"ghost"} size={"icon"} aria-label="" className="size-10 rounded-full cursor-pointer">
              <span className="h-6 w-6 items-center justify-center pointer-events-none">
                <RiShoppingBagLine className="size-6 pointer-events-none" />
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Product Search Input Bar - Small (Mobile/Tablets) Devices */}
      <div className="block xl:hidden pb-2 px-3">
        <ProductSearchInputBar className="" />
      </div>
    </div>
  );
};

export default TopNavigationBar;
