'use client'

import ProductCard from './ProductCard'

const oltoSpecs = [
  { label: 'Usage', value: 'Bike Lane' },
  { label: 'Top Speed', value: '28 mph' },
  { label: 'Range', value: '40 miles' },
  { label: 'Passengers', value: 'Two' },
  { label: 'Starting At', value: '$3,495' },
  { label: 'Shipping', value: 'Spring 26' },
]

const p1Specs = [
  { label: 'Usage', value: 'Car Lane' },
  { label: 'Top Speed', value: '65 mph' },
  { label: 'Range', value: '60 miles' },
  { label: 'Passengers', value: 'Two' },
  { label: 'Starting At', value: '$10,000' },
  { label: 'Shipping', value: 'Now' },
]

export default function ProductGrid() {
  return (
    <section className="w-full bg-white border-t border-black/10">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/10">

        <ProductCard
          title="OLTO"
          description="A new vehicle designed for the bike lane."
          specs={oltoSpecs}
          imageSrc="/images/olto.jpg"
          imageAlt="Olto"
        />

        <ProductCard
          title="P1"
          description="Best in class performance and tech."
          specs={p1Specs}
          imageSrc="/images/p1.jpg"
          imageAlt="P1"
        />

      </div>
    </section>
  )
}