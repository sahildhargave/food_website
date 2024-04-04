import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
//import { User } from "lucide-react";
//import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  //const navigate = useNavigate();

  const domain = "dev-o3xu5bjl2veww8vk.us.auth0.com"; // Replace with your Auth0 domain
  const clientId = "zn4SK6PAxAWUP1cWSOHZzYBADWLrSVAv"; // Replace with your Auth0 client ID
  const redirectUri = "http://localhost:5173"; // Replace with your callback URL
  // const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  if (!domain || !clientId || !redirectUri) {
    throw new Error("Unable to initialise auth");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("USER", user);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
