import { StaticImageData } from "next/image";
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

type ProductType = {
  slug: string;
  productName: string;
  coverImage: StaticImageData | string;
  price: number;
}

interface ProductCardProps {
  product: ProductType;
  className?: string;
}

const ProductCard: FC<ProductCardProps> = ({ product, className }) => {
  const { coverImage, productName, price, slug } = product;
  return (
    <div className={`relative rounded-xl ${className}`}>
      <div className="relative h-[430px] overflow-hidden rounded-xl">
        <Image
          src={coverImage}
          alt="coverImage"
          className="h-full w-full object-cover object-top"
          width={1000}
          height={1000}
        />
        <Link
          href={`/products/${slug}`}
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <div className="mt-5 space-y-1">
        <div className="flex items-center justify-between">
          <Link href={`/products/${slug}`} className="text-2xl font-medium">
            {productName}
          </Link>
        </div>
        <p className="text-2xl font-medium text-secondary">${price}.00</p>
      </div>
    </div>
  );
};


const SectionProducts = () => {
  return (
    <div className="container">
      <Heading showDash className="pb-16">
        {midText}
      </Heading>

      <div className="space-y-10">
        <div className="items-center justify-between md:flex">
          <Heading isMain className="mb-0">
            2023 New Arrivals
          </Heading>
          <ButtonPrimary href="/products">Shop Now</ButtonPrimary>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {products.slice(3, 6).map((product) => (
            <ProductCard product={product} key={product.productName} />
          ))}
        </div>

        <div className="mt-16 h-px w-full bg-neutral-300" />
      </div>
    </div>
  );
};

export default SectionProducts;
