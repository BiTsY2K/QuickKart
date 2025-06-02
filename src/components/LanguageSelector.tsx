'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import {
  Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue
} from './ui/select';

import flag_india from "../../public/flags/ind.png";


type LanguageType = { code: string; flag: string, name: string };

const languages: Array<LanguageType> = [
  { code: 'en', flag: 'US', name: 'English' },
  { code: 'es', flag: 'ES', name: 'Español' },
  { code: 'de', flag: 'DE', name: 'Deutsch' },
  { code: 'fr', flag: 'FR', name: 'Français' },
  { code: 'jp', flag: 'JP', name: '日本語' },
  { code: 'zh', flag: 'CN', name: '中文 (简体)' },
  { code: 'pt', flag: 'PT', name: 'Português' },
  { code: 'it', flag: 'IT', name: 'Italiano' },
  { code: 'ar', flag: 'AR', name: 'العربية' },
  { code: 'ko', flag: 'KO', name: '한국어' },
];

interface LanguageSelectorProps {
  variant: "HEADER" | "FOOTER",
  isDeviceMobile: boolean,
  className?: string,
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant, isDeviceMobile, className
}) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(
    languages.find(lang => lang.code === (i18n.language || 'en'))
  );

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, currentLanguage]);

  const handleLanguageChange = (value: string) => {
    const selectedLanguage = languages.find(lang => lang.code === value);
    if (selectedLanguage) {
      setCurrentLanguage(selectedLanguage);
      i18n.changeLanguage(value);
    }
  };

  return (
    <Select value={currentLanguage?.code} onValueChange={handleLanguageChange}>
      <SelectTrigger className={`
        w-full h-10 rounded cursor-pointer focus-visible:ring-ring focus-visible:ring-[0.3px] ${className}
        ${variant === 'HEADER' ? "md:w-[5rem] px-1 gap-0.5 border-transparent border-2 hover:border-ring shadow-none"
          : (variant === 'FOOTER' ? "*:data-[slot=select-value]:flex-1 border-ring border-2" : "")
        }
      `}>
        <div className="languageSelectorTriggerWrapper flex items-center">
          {(variant === 'HEADER') && <Image src={flag_india} alt="India's flag" width={24} height={24} className="hidden md:block" />}
          {(variant === 'FOOTER') && <HiOutlineGlobeAlt size={24} />}
          <SelectValue placeholder="Select a language" className="w-[1.625rem] ">
            <span className={`text-sm ${(variant === 'HEADER') ? "font-semibold uppercase" : ""}`}>
              {(variant === 'HEADER') ? currentLanguage?.code : ((variant === 'FOOTER') ? currentLanguage?.name : "")}
            </span>
          </SelectValue>
        </div>
      </SelectTrigger>
      <SelectContent className="md:w-48">
        <SelectGroup>
          {languages.map((language) => (
            <SelectItem key={language.code} value={language.code}>
              <div className="flex items-center text-xs">
                <span className="">{language.name} - {language.flag}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export { LanguageSelector };