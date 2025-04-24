import { Counter } from '@/components/Counter';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { Layout } from '@/components/Layout';

export const Home = () => {
	return (
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
			<Footer />
		</Layout>
	);
};
