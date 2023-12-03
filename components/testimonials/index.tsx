import Image from 'next/image';
import React from 'react';
import styles from './Testimonial.module.css'
import LogoImg from '@/public/logo.svg';

const Testimonials = () => {
	const testimonialSectioncarddata = [
		{
			name: 'Jack F',
			designation: 'Ex Blackrock PM',
			comment: '“Love how Loch integrates portfolio analytics and whale watching into one unified app.”'
		},
		{
			name: 'Yash P',
			designation: 'Research, 3poch Crypto Hedge Fund',
			comment: "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”"
		}
	];
	return (
		<div className={styles['info-banner-testimonials']}>
			<div className={styles['info-banner-testimonials-logo']}>
				<Image src={LogoImg} alt="Loch Ai" width={60} height={60} />
			</div>
			<div className={styles['info-banner-testimonials-section']}>
				{testimonialSectioncarddata.map((item, idx) => (
					<div key={idx} className={styles['info-banner-testimonials-section-card']}>
						<div className={styles['info-banner-testimonials-section-card-head']}>
							<h6>{item.name}</h6>
							<p>{item.designation}</p>
						</div>
						<h2>{item.comment}</h2>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
