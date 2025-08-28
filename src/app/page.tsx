"use client"
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import CyclopsHero from '@/components/sections/layouts/hero/CyclopsHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import RegularFAQ from '@/components/sections/layouts/faq/RegularFAQ';
import SimpleFooter from '@/components/sections/layouts/footer/SimpleFooter';
import { useState } from 'react';

const termsAndConditionsContent = "Terms and conditions content goes here.";
const privacyPolicyContent = "Privacy policy content goes here.";
const contactForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <input type="text" placeholder="Name" required className="p-2 rounded border" />
      <input type="email" placeholder="Email" required className="p-2 rounded border" />
      <textarea placeholder="Message" required className="p-2 rounded border"></textarea>
      <button type="submit" className="bg-primary text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <section id="hero" className="bg-white py-18">
        <CyclopsHero 
          title="Welcome to Basic Pages One-Pager"
          subtitle="Your one-stop for core information"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => setActiveSection('about')}
          onSecondaryButtonClick={() => setActiveSection('terms-conditions')}
          onContactClick={() => setActiveSection('contact')}
        />
      </section>
      <section id="about" className="bg-white py-18">
        <MinimalAbout description="Learn about our core values and mission." />
      </section>
      <section id="terms-conditions" className="bg-white py-18">
        <h2 className="text-3xl font-semibold">Terms & Conditions</h2>
        <p>{termsAndConditionsContent}</p>
      </section>
      <section id="privacy-policy" className="bg-white py-18">
        <h2 className="text-3xl font-semibold">Privacy Policy</h2>
        <p>{privacyPolicyContent}</p>
      </section>
      <section id="contact" className="bg-white py-18">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        {contactForm()}
      </section>
      <SimpleFooter 
        columns={[
          { title: 'Useful Links', items: [ { label: 'Privacy Policy', onClick: () => setActiveSection('privacy-policy') }, { label: 'Terms & Conditions', onClick: () => setActiveSection('terms-conditions') }]},
          { title: 'Get in Touch', items: [ { label: 'Contact', onClick: () => setActiveSection('contact') }]}
        ]}
        copyrightText="© 2023 Basic Pages. All rights reserved."
        onPrivacyClick={() => setActiveSection('privacy-policy')}
      />
    </SiteThemeProvider>
  );
}
