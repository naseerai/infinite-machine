'use client'

interface ImageSectionProps {
  imageSrc: string
  imageAlt: string
  height?: string
  style?: React.CSSProperties
}

export default function ImageSection({ imageSrc, imageAlt, height = '80vh', style }: ImageSectionProps) {
  return (
    <section
      className="w-full bg-[#e2e5e8] flex items-center justify-center overflow-hidden relative"
      style={{ height, ...style }}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover object-center"
        style={{ maxWidth: '100%' }}
      />
    </section>
  )
}
