import { CiEdit, CiShuffle } from 'react-icons/ci';
import TrueElement from '../../ui/TrueElement';
import FalseElement from '../../ui/FalseElement';

function InfoElement({ title, children, onClick, disabled, currentBoolean }) {
	return (
		<button
			onClick={onClick}
			className={`flex justify-between items-center relative bg-white p-2 shadow-sm shadow-black/25 rounded-md overflow-hidden w-full hover:cursor-default`}
			disabled={disabled}
		>
			<p>{title}</p>
			<p className='text-end text-gray'>{children}</p>
			{onClick && (
				<div className='absolute w-full h-full left-0 top-0 flex justify-center items-center opacity-0 hover:opacity-100 hover:bg-mainBlue/90 transition-all hover:cursor-pointer'>
					{currentBoolean === true || currentBoolean === false ? (
						<p className='flex items-center text-white text-3xl'>
							{currentBoolean ? (
								<>
									<TrueElement />
									<span className='text-xl'>
										<CiShuffle />
									</span>
									<FalseElement />
								</>
							) : (
								<>
									<FalseElement />
									<span className='text-xl'>
										<CiShuffle />
									</span>
									<TrueElement />
								</>
							)}
						</p>
					) : (
						<span className='text-3xl text-white'>
							<CiEdit />
						</span>
					)}
				</div>
			)}
		</button>
	);
}

export default InfoElement;
