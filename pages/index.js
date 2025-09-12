import { useRef } from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Welcome from '../components/sections/Welcome';
import Countdown from '../components/sections/Countdown';
import Venue from '../components/sections/Venue';
import OurStory from '../components/sections/OurStory';
import RSVP from '../components/sections/RSVP';
import Wishlist from '../components/sections/Wishlist';
import Testimonials from '../components/sections/Testimonials';
import Footer from '../components/sections/Footer';

export default function Home() {
  const rsvpSectionRef = useRef(null);

  const scrollToRSVP = () => {
    rsvpSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Head>
        <title>Casamento de Anna & Marcos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="data:image/x-icon;base64," type="image/x-icon" />
      </Head>

      <div className="bg-[var(--background-color)] text-[var(--text-primary)]">
        <div className="flex justify-center">
          <div className="relative flex size-full min-h-screen flex-col justify-between group/design-root overflow-x-hidden max-w-[480px]">
            <main className="flex-grow">
              <Hero onRSVPClick={scrollToRSVP} />
              <Welcome onRSVPClick={scrollToRSVP} />
            </main>
            <Countdown />
            <Venue />
            <RSVP ref={rsvpSectionRef} />
            <Wishlist />
            <Testimonials />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
