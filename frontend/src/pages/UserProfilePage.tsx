//🤧🤧🤧🤧🤧

import {useGetMyUser, useUpdateMyUser } from "@/api/UserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
const { updateUser, isLoading : isGetLoading } = useUpdateMyUser();
//const { currentUser , isLoading: isUpdateLoading } = useGetMyUser();   

if (isGetLoading){
	return <span>Loading...</span>
}
//
//if (!currentUser){
//	return <span>Unable to load User Profile</span>;
//}

	return (
		<UserProfileForm 
		//currentUser={currentUser}
		onSave={updateUser} 
		isLoading={isGetLoading}
		/>
	)
}

export default UserProfilePage;