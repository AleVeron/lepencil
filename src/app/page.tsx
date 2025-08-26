import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductCategories from '@/components/ProductCategories'
import FeaturedProducts from '@/components/FeaturedProducts'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main>
        <Hero />
        <ProductCategories />
        <FeaturedProducts />
        <About />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
