import { useState } from 'react';
import SettingsElement from './SettingsElement';
import { useGetDescription } from './useGetDescription';
import Modal from '../../ui/Modal';
import EditFormTutor from './EditFormTutor';
import SkillsContainer from './SkillsContainer';
import { CiAlarmOn, CiCalendar, CiCircleInfo, CiMedal } from 'react-icons/ci';
import TutorInfoHeader from './TutorInfoHeader';
import CalendarContainer from './CalendarContainer';

function TutorInfo() {
	const { data } = useGetDescription();
	const [showModal, setShowModal] = useState(null);
	function handleModal(type) {
		setShowModal(type);
	}
	return (
		<div className='px-2 md:py-0 sm400:w-4/5 md:w-full md:px-5 mx-auto py-4'>
			<div className='mb-10'>
				<TutorInfoHeader icon={<CiCircleInfo />} label={'Opis'} />
				<SettingsElement onClick={() => handleModal('description')}>
					{data?.description ? data?.description : 'Brak'}
				</SettingsElement>
			</div>
			<div className='mb-10'>
				<TutorInfoHeader icon={<CiMedal />} label={'Umiejętności'} />
				<SkillsContainer />
			</div>
			<div>
				<TutorInfoHeader icon={<CiCalendar />} label={'Terminy'} />
				<CalendarContainer />
			</div>

			{showModal && (
				<Modal>
					<EditFormTutor showModal={showModal} setShowModal={setShowModal} />
				</Modal>
			)}
		</div>
	);
}

export default TutorInfo;
