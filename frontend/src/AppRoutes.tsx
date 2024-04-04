import { Navigate, Route, Routes} from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";

const AppRoutes = () => {
	return (
	
        <Routes>
      <Route
        path="/"
        element={
          <Layout >
            <HomePage />
          </Layout>
        }
      />
		<Route path="/user-profile" element={<span>User profile page</span>}/>
		<Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route
        path="/search/:city"
        element={
          <Layout >
            <HomePage/>
          </Layout>
        }
      />
		<Route path="*" element={<Navigate to ="/"/>}/>
		</Routes>

	)
}

export default AppRoutes;