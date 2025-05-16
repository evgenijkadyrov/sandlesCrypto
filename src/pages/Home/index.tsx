import { AboutUs } from '@/components/AboutUs';
import { ClientLogo } from '@/components/ClientLogo';
import { ContactUsSection } from '@/components/ContactUsSection';
import { Counter } from '@/components/Counter';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { Layout } from '@/components/Layout';
import { MobileSection } from '@/components/MobileSection';
import { NewsSection } from '@/components/NewsSection';
import { InvestmentSection } from '@/components/Product';
import { TestimonialSection } from '@/components/TestimonialSection';
import { TraderSection } from '@/components/TraderSection';
import { WhyUsBlock } from '@/components/WhyUs';
import { Work } from '@/components/Work';

export const Home = () => {
	return (
		<>
			<Layout>
				<Header />
				<HeroSection />
				<Counter />
			</Layout>
			<AboutUs />
			<ClientLogo />
			<Work />
			<InvestmentSection />
			<WhyUsBlock />
			<TraderSection />
			<TestimonialSection />
			<MobileSection />
			<NewsSection />
			<ContactUsSection />
			<Layout>
				<Footer />
			</Layout>
		</>
	);
};
