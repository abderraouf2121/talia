/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  Menu as MenuIcon, 
  X, 
  Instagram, 
  Facebook,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_INFO, MENU_ITEMS, IMAGES } from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['all', ...new Set(MENU_ITEMS.map(item => item.category))];

  const filteredMenu = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-cafe-accent selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-cafe-cream/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-cafe-dark">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <Coffee className="w-8 h-8 text-cafe-accent" />
            <span className="text-3xl font-black tracking-tighter">TALIA.</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-sans font-bold">
            {['home', 'about', 'menu', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-cafe-accent transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-cafe-dark text-cafe-cream px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-sans font-bold hover:bg-[#3d332d] transition-all"
            >
              Visit Us
            </button>
          </div>

          <button 
            className="md:hidden text-cafe-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cafe-cream flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['home', 'about', 'menu', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="font-serif text-4xl hover:text-cafe-accent transition-colors"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Hero Background" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 text-sm font-medium tracking-[0.4em] uppercase"
          >
            Boufarik's Favorite Spot
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-serif text-7xl md:text-9xl font-bold leading-[0.85] mb-8 tracking-tighter"
          >
            Your cozy <br /> coffee escape.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <button 
              onClick={() => scrollToSection('menu')}
              className="w-full md:w-auto bg-cafe-accent text-white px-10 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-[11px] hover:bg-cafe-dark transition-all duration-500 group flex items-center justify-center gap-2"
            >
              Explore Menu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="w-full md:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-[11px] hover:bg-white/20 transition-all duration-500"
            >
              Our Story
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-xs font-medium tracking-widest uppercase"
        >
          <span>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </section>

      {/* Featured Highlights */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-row-2 gap-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img 
                src={IMAGES.coffee} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                alt="Signature Coffee"
                referrerPolicy="no-referrer" 
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <span className="text-cafe-accent font-medium tracking-widest uppercase text-sm mb-4">The Craft</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">Masterfully Brewed <br /> For Coffee Lovers</h2>
              <p className="text-cafe-dark/70 text-lg mb-8 leading-relaxed">
                Every cup at Talia is a testament to our passion. We source the finest beans to ensure that every sip takes you on a journey of rich flavors and aromatic bliss.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-serif text-2xl mb-2 italic">100% Arabic</h4>
                  <p className="text-sm text-cafe-dark/60">Premium quality beans</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl mb-2 italic">Hand Crafted</h4>
                  <p className="text-sm text-cafe-dark/60">Made with love</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-cafe-dark text-cafe-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <img src={IMAGES.interior} className="w-full h-full object-cover" alt="Interior texture" referrerPolicy="no-referrer" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4 text-xs font-medium tracking-[0.4em] uppercase opacity-60"
            >
              Our Story
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-5xl md:text-6xl mb-8 leading-tight"
            >
              A place to slow down <br /> and reconnect.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-light leading-relaxed mb-12 opacity-80"
            >
              {BUSINESS_INFO.description}
            </motion.p>
            
            <div className="flex items-center gap-8 border-l-4 border-cafe-accent pl-10">
              <div className="flex flex-col">
                <span className="text-6xl font-serif text-cafe-accent font-bold mb-1">{BUSINESS_INFO.rating}</span>
                <div className="text-[11px] font-sans uppercase font-bold tracking-[0.2em] opacity-60">
                  Customer Rating
                </div>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-10 py-2">
                <span className="text-xl font-sans font-bold italic text-white mb-1 uppercase tracking-widest">{BUSINESS_INFO.reviewsCount}+ Reviews</span>
                <span className="text-[10px] font-sans uppercase font-bold tracking-[0.1em] opacity-40">Popular Spot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cafe-accent font-medium tracking-widest uppercase text-sm mb-4 block">Delicacies</span>
          <h2 className="font-serif text-5xl md:text-6xl mb-6">Our Menu</h2>
          <p className="text-cafe-dark/60 max-w-2xl mx-auto">
            From classic espressos to our signature creative blends, we have something to satisfy every craving.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-medium uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-cafe-accent text-white shadow-lg' 
                  : 'bg-white text-cafe-dark/60 hover:bg-cafe-dark hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 border border-cafe-dark/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] uppercase font-sans font-bold tracking-widest opacity-40 group-hover:text-cafe-accent transition-colors">{item.category}</span>
                    <span className="font-serif text-xl font-semibold italic text-cafe-accent">{item.price}</span>
                  </div>
                  <h3 className="font-serif text-3xl font-medium italic mb-4 group-hover:text-cafe-dark transition-colors">{item.name}</h3>
                  <p className="text-sm font-sans opacity-70 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-cafe-dark/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <ChevronRight className="w-5 h-5 text-cafe-accent" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Atmosphere Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
           <div className="order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-3xl overflow-hidden aspect-[4/5] shadow-lg"
                >
                  <img src={IMAGES.vibe} className="w-full h-full object-cover" alt="Cafe vibe" referrerPolicy="no-referrer" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="rounded-3xl overflow-hidden aspect-[4/5] mt-12 shadow-lg"
                >
                  <img src={IMAGES.interior} className="w-full h-full object-cover" alt="Interior" referrerPolicy="no-referrer" />
                </motion.div>
             </div>
           </div>
           <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
           >
              <span className="text-cafe-accent font-medium tracking-widest uppercase text-sm mb-4 block">The Vibe</span>
              <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">Designed for <br /> Comfort & Peace</h2>
              <p className="text-cafe-dark/70 text-lg mb-8 leading-relaxed">
                Talia isn't just about coffee. It's about the feeling of home away from home. We've curated a space where every corner invites you to relax, read, work, or share moments with friends.
              </p>
              <ul className="space-y-4">
                {[
                  'Free high-speed WiFi for digital nomads',
                  'Comfortable seating corners',
                  'Calm musical backdrop',
                  'Perfect lighting for reading'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-cafe-dark/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-cafe-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => scrollToSection('contact')}
                className="mt-12 bg-cafe-dark text-white px-10 py-4 rounded-full font-medium hover:bg-cafe-accent transition-all duration-300"
              >
                Visit Us Today
              </button>
           </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-cafe-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-cafe-dark rounded-[3rem] text-white p-8 md:p-20 relative overflow-hidden">
             {/* Abstract highlight */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-cafe-accent/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
             
             <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                <div>
                  <h2 className="font-serif text-5xl mb-8 leading-tight">Come visit <br /> our little corner.</h2>
                  <div className="space-y-8">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                        <MapPin className="text-cafe-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Our Location</h4>
                        <p className="text-white/60">{BUSINESS_INFO.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                        <Clock className="text-cafe-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                        <p className="text-white/60">{BUSINESS_INFO.hours}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                        <Phone className="text-cafe-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Talk to Us</h4>
                        <p className="text-white/60">{BUSINESS_INFO.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem]">
                  <h3 className="font-serif text-2xl mb-6">Send us a message</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-white/10 border border-white/20 px-6 py-4 rounded-2xl focus:outline-none focus:border-cafe-accent transition-colors"
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full bg-white/10 border border-white/20 px-6 py-4 rounded-2xl focus:outline-none focus:border-cafe-accent transition-colors"
                    />
                    <textarea 
                      placeholder="Your Message" 
                      rows={4}
                      className="w-full bg-white/10 border border-white/20 px-6 py-4 rounded-2xl focus:outline-none focus:border-cafe-accent transition-colors resize-none"
                    />
                    <button className="w-full bg-cafe-accent text-white py-4 rounded-2xl font-bold hover:bg-white hover:text-cafe-dark transition-all duration-300 uppercase tracking-widest text-sm">
                      Send Message
                    </button>
                  </form>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-cafe-dark/10 px-6 bg-white relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-end">
          <div className="text-left">
            <div className="text-[10px] uppercase tracking-widest opacity-40 mb-4 font-sans font-bold">Location</div>
            <div className="text-sm font-sans leading-relaxed text-cafe-dark/80">
              56 Rue des Frères Retal,<br />
              Boufarik, Algeria
            </div>
          </div>
          
          <div className="text-center flex flex-col items-center">
             <div className="text-3xl font-black tracking-tighter mb-6">TALIA.</div>
             <div className="text-[10px] uppercase tracking-widest opacity-40 mb-3 font-sans font-bold">Hours</div>
             <div className="text-sm font-sans font-medium">{BUSINESS_INFO.hours}</div>
          </div>

          <div className="text-right">
            <div className="text-[10px] uppercase tracking-widest opacity-40 mb-4 font-sans font-bold">Contact</div>
            <div className="text-sm font-sans leading-relaxed text-cafe-dark/80 italic">
              {BUSINESS_INFO.phone}<br />
              hello@taliacoffee.dz
            </div>
            <div className="flex gap-4 justify-end mt-6">
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-20 border-t border-cafe-dark/5 mt-20 text-center text-[10px] text-cafe-dark/30 uppercase tracking-[0.3em] font-bold">
          &copy; {new Date().getFullYear()} Talia Coffeeshop &bull; Editorial Series No. 01
        </div>
      </footer>
    </div>
  );
}
