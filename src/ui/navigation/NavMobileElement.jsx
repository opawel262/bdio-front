import { NavLink } from 'react-router-dom';

function NavMobileElement({ children, to, onClick, icon }) {
	return (
		<>
			{to && (
				<NavLink
					className='py-5 hover:text-mainPurple text-xl text-gray flex flex-row flex-start items-center gap-2 p-4'
					to={to}
				>
					<span className='block text-2xl'>{icon}</span>
					<p className='block'>{children}</p>
				</NavLink>
			)}
			{onClick && (
				<button
					className='py-5 hover:text-mainPurple text-xl text-gray flex flex-row flex-start items-center gap-2 p-4'
					onClick={onClick}
				>
					<span className='block text-2xl'>{icon}</span>
					<p className='block'>{children}</p>
				</button>
			)}
		</>
	);
}

export default NavMobileElement;
