import { AboutUs } from '@/components/AboutUs';
import { ClientLogo } from '@/components/ClientLogo';
import { Counter } from '@/components/Counter';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { Layout } from '@/components/Layout';
import { InvestmentSection } from '@/components/Product';
import { WhyUsBlock } from '@/components/WhyUs';
import { Work } from '@/components/Work';

export const Home = () => {
	return (
		<>
			<Layout>
				<Header />
				<HeroSection
					title="Build Wealth Automatically
With Crypto"
					subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut dolor sit"
					buttonText="Get Started"
					onButtonClick={() => {}}
				/>
				<Counter />
			</Layout>
			<AboutUs />
			<ClientLogo />
			<Work />
			<InvestmentSection />
			<WhyUsBlock />
			<Layout>
				<Footer />
			</Layout>
		</>
	);
};
