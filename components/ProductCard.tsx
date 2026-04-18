'use client'

interface Spec {
  label: string
  value: string
}

interface ProductCardProps {
  title: string
  description: string
  specs: Spec[]
  imageSrc: string
  imageAlt: string
}

export default function ProductCard({
  title,
  description,
  specs,
  imageSrc,
  imageAlt,
}: ProductCardProps) {
  return (
    <div className="w-full px-8 md:px-12 pt-12 pb-10 flex flex-col justify-between min-h-[695px] bg-white relative">

      {/* TOP SECTION */}
      <div className="flex justify-between items-start z-10">
        {/* TITLE */}
        <h2 className="text-[60px] md:text-[80px] font-[900] tracking-[-0.06em] leading-none uppercase scale-x-110 origin-left">
          {title}
        </h2>

        {/* SPECS */}
        <div className="text-[13px] text-right space-y-0.5 pt-4">
          {specs.map((spec, i) => (
            <div key={i} className="flex gap-10 justify-end">
              <span className="text-gray-400 font-normal">{spec.label}</span>
              <span className="font-medium text-black">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="flex-1 flex items-center justify-center -mt-8 -mb-4 bg-white">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full max-w-[800px] object-contain transition-transform hover:scale-105 duration-700"
        />
      </div>

      {/* BOTTOM SECTION */}
      <div className="flex justify-between items-end text-[15px] z-10">
        <p className="text-gray-400 max-w-[280px] leading-snug font-light">
          {description}
        </p>

        <button className="underline underline-offset-4 font-normal hover:opacity-50 transition-opacity">
          Learn More
        </button>
      </div>
    </div>
  )
}