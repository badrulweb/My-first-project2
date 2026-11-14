import { useState, useCallback } from 'react';
import NavDrawer from '@/components/navigation/NavDrawer';
import FloatingMenuButton from '@/components/navigation/FloatingMenuButton';
import Hero from '@/components/sections/Hero';
import CollectionGrid from '@/components/sections/CollectionGrid';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import ShopByCategory from '@/components/sections/ShopByCategory';
import FeaturedCollections from '@/components/sections/FeaturedCollections';
import ShopByMaterial from '@/components/sections/ShopByMaterial';
import BrandStory from '@/components/sections/BrandStory';
import Bridal from '@/components/sections/Bridal';
import Footer from '@/components/sections/Footer';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <div className="min-h-screen bg-ivory-100">
      <FloatingMenuButton open={menuOpen} onToggle={toggleMenu} />
      <NavDrawer open={menuOpen} onClose={closeMenu} cartCount={cartCount} />

      <main>
        <Hero />
        <CollectionGrid />
        <FeaturedProducts />
        <ShopByCategory />
        <FeaturedCollections />
        <ShopByMaterial />
        <BrandStory />
        <Bridal />
      </main>

      <Footer />
    </div>
  );
}
