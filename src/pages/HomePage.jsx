import HeaderButtonJoinNow from '../ui/homepage/HeaderButtonJoinNow';
import HeaderImg from '../ui/homepage/HeaderImg';
import HeaderText from '../ui/homepage/HeaderText';
import HeaderIcon from '../ui/homepage/HeaderIcon';
import HeaderFooter from '../ui/homepage/HeaderFooter';
import { useContext, useEffect } from 'react';
import { FooterContext } from '../context/FooterContext';

function HomePage() {
	const { changeColor } = useContext(FooterContext);

	useEffect(() => {
		changeColor('text-white bg-mainPurple');
	}, [changeColor]);

	return (
		<div className='flex flex-col '>
			<div className='max-w-7xl mx-auto relative'>
				<HeaderText />
				<HeaderButtonJoinNow />
				<HeaderIcon />
				<HeaderImg />
			</div>
			<HeaderFooter />
		</div>
	);
}

export default HomePage;
