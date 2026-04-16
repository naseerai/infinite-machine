import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import ImageSection from '@/components/ImageSection'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <Hero />

      {/* Product Grid: OLTO + P1 */}
      <ProductGrid />

      {/* Full Width Image — Front view */}
      <ImageSection
        imageSrc="/images/p1frontview.jpg"
        imageAlt="P1 Electric Scooter Front View"
        height="78vh"
        style={{ background: '#dce0e3' }}
      />

      {/* Newsletter */}
      <Newsletter />

      {/* Large Angled Image */}
      <ImageSection
        imageSrc="/images/scooter_close_up_angle.jpg"
        imageAlt="Scooter close-up angle"
        height="88vh"
        style={{ background: '#d4d8dc' }}
      />

      {/* Footer */}
      <Footer />
    </main>
  )
}