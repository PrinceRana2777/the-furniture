/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Star, 
  ShoppingBag, 
  Truck, 
  Heart, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowUp, 
  MessageCircle,
  CheckCircle2,
  Package,
  Store,
  Instagram,
  Briefcase,
  Home,
  Palette,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PRODUCTS = [
  { id: 1, name: 'Sofa Sets', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop', category: 'Living Room' },
  { id: 2, name: 'Dining Tables', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000&auto=format&fit=crop', category: 'Dining' },
  { id: 3, name: 'Office Furniture', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop', category: 'Office' },
  { id: 4, name: 'Beds & Bedroom Furniture', image: 'https://images.unsplash.com/photo-1505693419148-403bb22b9f11?q=80&w=1000&auto=format&fit=crop', category: 'Bedroom' },
  { id: 5, name: 'Chairs & Seating', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop', category: 'Seating' },
  { id: 6, name: 'Interior Design Services', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop', category: 'Interior' },
];

const TESTIMONIALS = [
  { id: 1, name: 'Rajesh M.', text: 'Good quality and priced products with the latest collection.', rating: 5 },
  { id: 2, name: 'Sonal V.', text: 'Delivery process was smooth and customer service exceeded expectations.', rating: 5 },
  { id: 3, name: 'Vikram K.', text: 'Professional work and great experience from start to finish.', rating: 5 },
  { id: 4, name: 'Anjali S.', text: 'Some customers faced durability issues, but the team is responsive and works to resolve problems.', rating: 4 },
];

const WHY_CHOOSE_US = [
  { icon: Palette, title: 'Stylish & Modern Designs', desc: 'Curated collections that blend elegance with contemporary trends.' },
  { icon: CheckCircle2, title: 'High-Quality Materials', desc: 'We use premium wood and fabrics for long-lasting comfort.' },
  { icon: Sparkles, title: 'Custom Furniture Options', desc: 'Bespoke solutions tailored to your specific space and taste.' },
  { icon: Home, title: 'Interior Expertise', desc: 'Professional design services to transform your entire home.' },
  { icon: Truck, title: 'Reliable Delivery', desc: 'Safe and timely delivery across Vasai-Virar and beyond.' },
  { icon: Heart, title: 'Customer Satisfaction', desc: 'Our team is dedicated to providing an exceptional experience.' },
];

const GALLERY_IMAGES = [
  { id: 1, category: 'Sofa', url: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, category: 'Dining', url: 'https://images.unsplash.com/photo-1577145900570-4c0567ec37a2?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, category: 'Beds', url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, category: 'Interior', url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop' },
  { id: 5, category: 'Dining', url: 'https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=1000&auto=format&fit=crop' },
  { id: 6, category: 'Beds', url: 'https://images.unsplash.com/photo-1505693419148-403bb22b9f11?q=80&w=1000&auto=format&fit=crop' },
  { id: 7, category: 'Chairs', url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop' },
  { id: 8, category: 'Office', url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop' },
];

const SafeImage = ({ src, alt, className, height = "300px" }: { src: string, alt: string, className?: string, height?: string }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const fallback = `https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000`;

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={{ width: '100%', height: height, objectFit: 'cover' }}
      onError={() => setImgSrc(fallback)}
      referrerPolicy="no-referrer"
    />
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-brown-dark">
                THE <span className="text-gold">FURNITURE</span> TOWN
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Products', 'Gallery', 'Why Us', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="text-sm font-medium hover:text-gold transition-colors"
                >
                  {item}
                </a>
              ))}
              <a 
                href="tel:+917276358560"
                className="bg-brown-dark text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brown-dark/90 transition-all flex items-center gap-2"
              >
                <Phone size={16} /> Call Now
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brown-dark p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-black/5 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {['Home', 'About', 'Products', 'Gallery', 'Why Us', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-brown-dark hover:bg-cream rounded-lg"
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-4">
                  <a 
                    href="tel:+917276358560"
                    className="w-full bg-brown-dark text-white px-5 py-3 rounded-lg text-center font-medium flex items-center justify-center gap-2"
                  >
                    <Phone size={18} /> Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Gudi Padwa Promo Banner */}
      <div className="bg-gold text-white py-3 px-4 text-center relative z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span className="font-bold tracking-wide flex items-center gap-2">
            <Sparkles size={18} /> Happy Gudi Padwa! Celebrate your home with comfort & style ✨
          </span>
          <span className="text-xs sm:text-sm opacity-90">
            New Year. New Home Vibes. Upgrade today!
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop" 
            alt="Modern Interior"
            height="100%"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 bg-gold/90 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Furniture Wholesaler & Interior Store
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Transform Your Space with <span className="italic text-gold-light">Style & Comfort</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 font-light leading-relaxed">
              Premium Furniture | Elegant Interiors | Modern Living. Trusted by customers in Vasai-Virar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#products" 
                className="bg-gold hover:bg-gold-light text-brown-dark px-8 py-4 rounded-full font-bold text-center transition-all flex items-center justify-center gap-2"
              >
                Explore Products <ChevronRight size={20} />
              </a>
              <a 
                href="tel:+917276358560" 
                className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-center transition-all"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <SafeImage 
                  src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1000&auto=format&fit=crop" 
                  alt="Furniture Town Showroom"
                  height="100%"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden lg:block border border-black/5">
                <div className="text-4xl font-serif font-bold text-gold">3.3</div>
                <div className="flex text-gold mb-2">
                  {[...Array(3)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  <Star size={16} className="text-gold/30" />
                  <Star size={16} className="text-gold/30" />
                </div>
                <div className="text-sm font-medium text-brown-dark/60">66 Google Reviews</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-bold tracking-widest uppercase text-xs mb-4 block">About Furniture Town</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Elegance and Comfort for Your Home & Office
              </h2>
              <p className="text-lg text-brown-dark/70 mb-8 leading-relaxed">
                The Furniture Town is your one-stop destination for premium furniture and professional interior design solutions in Vasai West. We specialize in blending modern aesthetics with traditional craftsmanship.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Premium furniture for home & office',
                  'Stylish and elegant designs',
                  'Focus on comfort and durability',
                  'Trusted by customers in Vasai-Virar',
                  'Professional team and service'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brown-dark/80">
                    <CheckCircle2 size={20} className="text-gold" /> {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-2 text-brown-dark font-bold border-b-2 border-gold pb-1 hover:text-gold transition-colors">
                Get a Free Consultation <ChevronRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products & Services Section */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Collections & Services</h2>
            <p className="text-brown-dark/60">From wholesale furniture to bespoke interior design, we provide everything you need for a beautiful space.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden mb-6 shadow-md">
                  <SafeImage 
                    src={product.image} 
                    alt={product.name}
                    height="300px"
                    className="w-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                  <div className="absolute bottom-6 left-6">
                    <span className="text-xs font-bold text-white/80 uppercase tracking-widest mb-1 block">
                      {product.category}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white">{product.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Showroom Gallery</h2>
            <p className="text-brown-dark/60">Take a visual tour of our latest furniture arrivals and interior projects.</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {GALLERY_IMAGES.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group rounded-2xl overflow-hidden shadow-lg break-inside-avoid"
              >
                <SafeImage 
                  src={image.url} 
                  alt={image.category}
                  height="auto"
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="whyus" className="py-24 bg-brown-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">The Furniture Town Advantage</h2>
            <p className="text-white/60">Why we are the preferred choice for furniture and interiors in Vasai.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {WHY_CHOOSE_US.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center text-brown-dark">
                  <item.icon size={24} />
                </div>
                <h4 className="text-xl font-serif font-bold">{item.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Customer Experiences</h2>
            <p className="text-brown-dark/60">Real feedback from our valued clients.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TESTIMONIALS.map((t) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-gold mb-4">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    {[...Array(5 - t.rating)].map((_, i) => <Star key={i} size={14} className="text-gold/20" />)}
                  </div>
                  <p className="text-brown-dark/70 mb-6 italic text-sm">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center text-gold font-bold text-xs">
                    {t.name[0]}
                  </div>
                  <span className="font-bold text-xs">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Location</h4>
                    <p className="text-brown-dark/60 text-sm leading-relaxed">
                      Vijay Bhavan, Opposite St. Augustines High School,<br />
                      Stella, Vasai West, Vasai-Virar,<br />
                      Maharashtra 401201
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <a href="tel:+917276358560" className="text-brown-dark/60 text-sm hover:text-gold transition-colors">
                      +91 72763 58560
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold shrink-0">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Follow Us</h4>
                    <a href="#" className="text-brown-dark/60 text-sm hover:text-gold transition-colors">
                      @thefurnituretown_vasai
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-2xl overflow-hidden h-64 shadow-inner border border-black/5">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.545678901234!2d72.823456!3d19.345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9a000000001%3A0x0!2zMTnCsDIwJzQ0LjQiTiA3MsKwNDknMjQuNCJF!5e0!3m2!1sen!2sin!4v1711000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="bg-cream p-10 rounded-3xl border border-gold/10">
              <h3 className="text-2xl font-serif font-bold mb-8">Inquiry Form</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brown-dark/60">Your Name</label>
                    <input type="text" className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brown-dark/60">Phone Number</label>
                    <input type="tel" className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all" placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brown-dark/60">Message / Requirement</label>
                  <textarea rows={4} className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all" placeholder="Tell us what you are looking for..." />
                </div>
                <button type="submit" className="w-full bg-brown-dark text-white font-bold py-4 rounded-xl hover:bg-brown-dark/90 transition-all shadow-lg shadow-brown-dark/10">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown-dark text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <span className="text-xl font-serif font-bold tracking-tight">
                THE <span className="text-gold">FURNITURE</span> TOWN
              </span>
              <p className="text-white/50 text-sm leading-relaxed">
                Premium furniture wholesaler and interior design experts in Vasai West. Elevating spaces with modern and traditional designs since years.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gold">Quick Links</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Collections</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#whyus" className="hover:text-white transition-colors">Why Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gold">Our Services</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li>Home Furniture</li>
                <li>Office Furniture</li>
                <li>Interior Design</li>
                <li>Wholesale Supply</li>
                <li>Custom Solutions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gold">Contact Info</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="shrink-0 text-gold" />
                  <span>Vasai West, Maharashtra 401201</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="shrink-0 text-gold" />
                  <span>+91 72763 58560</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 text-center text-white/30 text-xs">
            <p>© 2026 The Furniture Town. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-white text-brown-dark rounded-full shadow-2xl flex items-center justify-center hover:bg-cream transition-colors border border-black/5"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
        <a 
          href="https://wa.me/917276358560" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        >
          <MessageCircle size={28} fill="currentColor" />
        </a>
      </div>
    </div>
  );
}
