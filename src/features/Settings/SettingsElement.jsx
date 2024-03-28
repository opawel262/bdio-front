import { CiEdit } from 'react-icons/ci';

function SettingsElement({ label, children, onClick, hoverDisabled }) {
	return (
		<button
			className='relative p-4 flex flex-row flex-wrap gap-2 justify-between bg-white shadow-md shadow-shadowBlack rounded-md overflow-hidden hover:cursor-default'
			onClick={onClick}
		>
			<div>
				<p>{label}:</p>
			</div>
			<div>
				<p className='text-left'>{children}</p>
			</div>
			{!hoverDisabled && (
				<div className='absolute w-full h-full left-0 top-0 flex justify-center items-center opacity-0 hover:opacity-100 hover:bg-gray/60 transition-all hover:cursor-pointer'>
					<span className='text-3xl text-white'>
						<CiEdit />
					</span>
				</div>
			)}
		</button>
	);
}

export default SettingsElement;
