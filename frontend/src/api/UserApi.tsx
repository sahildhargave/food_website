import { useMutation} from "react-query";
import { useAuth0 } from "@auth0/auth0-react";


const API_BASE_URL = "http://localhost:7000";

type CreateUserRequest = {
	auth0Id: string;
	email: string;
}

export const useCreateMyUser = () => {

	const { getAccessTokenSilently } = useAuth0();

	const createMyUserRequest = async ( user : CreateUserRequest)=>{
		
		const accessToken = await getAccessTokenSilently();
		
		const response = await fetch(`${API_BASE_URL}/api/my/user`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${accessToken}`,
				"Content-Type" : "Application/json",

			},
			body: JSON.stringify(user),

		});

		if(!response.ok){
			throw new Error("Failed to create user");
		}
	};

	const { 
		mutateAsync: createUser ,
		 isLoading,
		 isError, 
		 isSuccess,
		} = useMutation(createMyUserRequest); 

		return {
			createUser,
			isLoading,
			isError,
			isSuccess,
		};
};