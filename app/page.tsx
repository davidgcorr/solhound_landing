import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "SolHound - Blockchain Antivirus",
  description: "Solhound protects you from scams, false tokens and bad actors on the chain.",
  openGraph: {
    type: "website",
    url: "https://solhound.app",
    title: "SolHound - Blockchain Antivirus",
    description: "Solhound protects you from scams, false tokens and bad actors on the chain.",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "SolHound - Blockchain Antivirus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://solhound.app",
    title: "SolHound - Blockchain Antivirus",
    description: "Solhound protects you from scams, false tokens and bad actors on the chain.",
    images: [
      "",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <CommunitySection />
      <PricingSection />
      <ContactSection />
      <FAQSection />*/}
      <FooterSection /> 
    </>
  );
}
