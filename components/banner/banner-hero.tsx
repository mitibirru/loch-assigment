import styles from './Banner.module.css';
import BellSVG1 from '@/public/bell-1.svg';
import BellSVG2 from '@/public/bell-2.svg';
import BarChart from '@/public/bar-chart.svg';
import TriangleDown from '@/public/triangle-down.svg';
import EyeIcon from '@/public/eye.svg';
import Image from 'next/image';

const BannerHero = () => {
	return (
		<div className={styles['info-banner-hero']}>
			<BannerHeroSection1 />
			<BannerHeroSection2 />
		</div>
	);
};

const BannerHeroSection1 = () => {
	return (
		<div className={styles['section-1']}>
			<div className={styles['section-1-highlights']}>
				<Image src={BellSVG1} alt="Bell Icon" width={32} height={32} />
				<h4>Get notified when a highly correlated whale makes a move</h4>
				<p>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
			</div>
			<div className={styles['section-1-features']}>
				<div className={styles['section-1-feature-one']}>
					<div>
						<Image className={styles['notification-icon']} src={BellSVG2} alt="Bell Icon" width={28} height={28} />
						<span>Save</span>
					</div>
					<p>We’ll be sending notifications to you here</p>
					<input type="email" placeholder="hello@gmail.com" />
				</div>
				<div className={styles['section-1-feature-two']}>
					<Image alt="Bar Char Icon" src={BarChart} width={28} height={28} />
					<div>
						<p>Notify me when any wallets move more than</p>
						<div className={styles['section-2-dropdown']}>
							<p>$1,000.00</p>
							<Image src={TriangleDown} alt="triangle down" width={11} height={11} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

import React from 'react';

const BannerHeroSection2 = () => {
	return (
		<div className={styles['section-2-wrapper']}>
			<div className={styles['section-2']}>
				<Image
					alt="cohorts"
					src="https://s3-alpha-sig.figma.com/img/a837/e66b/317b128c03dcf7840ae72269ac076405?Expires=1702252800&Signature=ZZH8f1tbYw3OX47oyxc836fc8PXl9qy2VbI0aTl3eCyTQXMktv0aiChhCnuwkewf1d-kj42vcUi15xfB814Gc9Ia8kQyM84Gywaa62vFSjduik~Ag0Fu5yPcuHveLXNV9GN4yOQHi9EvzKtVKMqLfOYl-sQaQFMgTQutFpUF1T0uztVKl6yVWVrLZLlWcMpVywENAk~qUlnn~Fw54QGIhhgMHm2MWRkRjYBkMVggGvL1aSTxAlUvE~3PCjdjIy-udSoBsEWFCtFmCCWQzpUtRYk6UIpFhhSiSR-a9AtxXOOlDuXTgX3V2iRco2SBM5oF9zwzF-RG7-UzIuT-8bUXSw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
					height={306}
					width={335}
					style={{ borderRadius: '12px' }}
				/>
				<div className={styles['section-2-cohorts-info']}>
					<Image alt="eye icon" src={EyeIcon} width={32} height={32} />
					<h4>Watch what the whales are doing</h4>
					<p>All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</p>
				</div>
			</div>
			<div className={styles['info-banner-testimonials-title']}>
				<h4>Testimonials</h4>
			</div>
		</div>
	);
};

export default BannerHero;
