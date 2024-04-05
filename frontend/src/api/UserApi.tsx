import { useMutation, useQuery} from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { User } from "@/types";
//import { toast } from "sonner";

const API_BASE_URL = "http://localhost:7000";


export const useGetMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyUserRequest = async (): Promise<User> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }

    return response.json();
  };

  const {
    data: currentUser,
    isLoading,
    error,
  } = useQuery("fetchCurrentUser", getMyUserRequest);

  if (error) {
    //toast.error(error.toString());
  }

  return { currentUser, isLoading };
};


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

type UpdateMyUserRequest = {
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};

export const useUpdateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyUserRequest = async (formData: UpdateMyUserRequest) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/user`, { // Add 'http://' or 'https://' before 'localhost'
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to update user: ${errorData.message}`);
    }

    return response.json();
  };

  const {
    mutateAsync: updateUser,
    isLoading,
    isSuccess,
    error,
    reset,
  } = useMutation(updateMyUserRequest);

  return { updateUser, isLoading, isSuccess, error, reset };
};