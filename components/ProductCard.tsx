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
    <div className="w-full px-12 py-14 flex flex-col justify-between min-h-[700px]">

      {/* TOP */}
      <div className="flex justify-between items-start">
        {/* TITLE */}
        <h2 className="text-5xl font-bold tracking-tight">
          {title}
        </h2>

        {/* SPECS */}
        <div className="text-sm text-right space-y-1">
          {specs.map((spec, i) => (
            <div key={i} className="flex gap-6 justify-end">
              <span className="text-gray-400">{spec.label}</span>
              <span className="font-medium">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* IMAGE (CLEAN — NO BOX) */}
      <div className="flex justify-center items-center my-16">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full max-w-[650px] object-contain"
        />
      </div>

      {/* BOTTOM */}
      <div className="flex justify-between items-center text-sm">
        <p className="text-gray-500">
          {description}
        </p>

        <button className="underline underline-offset-4">
          Learn More
        </button>
      </div>
    </div>
  )
}