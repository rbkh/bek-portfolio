import AboutPage from './About';
import HomePage from './Home';

const AppRoutes = [
    {
        path: "/about",
        element: <AboutPage />,
        label: "About"
    },
    {
        path: "/",
        element: <HomePage />,
        label: "Home"
    }
]

export default AppRoutes;
