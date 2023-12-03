import BannerHero from './banner-hero';
import styles from './Banner.module.css';
import Testimonials from '../testimonials';

const Banner = () => {
	return (
		<section className={styles['info-banner']}>
			<BannerHero />
			<Testimonials />
		</section>
	);
};

export default Banner;
