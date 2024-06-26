import { useMutation } from '@tanstack/react-query';
import { getMessagesHistory as getMessagesHistoryApi } from '../../services/apiChats';
import toast from 'react-hot-toast';

export function useGetMessagesHistory() {
	const {
		data: messagesHistory,
		mutate: getMessagesHistory,
		isPending: isMessagesHistoryPending,
		isSuccess: isMessagesHistorySuccess,
	} = useMutation({
		mutationFn: getMessagesHistoryApi,
		onError: (err) => {
			const error = JSON.parse(err.message);
			toast.error(error);
		},
	});
	return {
		messagesHistory,
		getMessagesHistory,
		isMessagesHistoryPending,
		isMessagesHistorySuccess,
	};
}
