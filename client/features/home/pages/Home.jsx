import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import HowItWorks from "../components/HowItWorks";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";
import Footer from "../../../components/Footer";
import { useAuth } from "../../../src/context/AuthContext";
import { Navigate } from "react-router-dom";

const Home = () => {

    const { user } = useAuth();


     if (user) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <div className="min-h-screen bg-gray-50">

            <HeroSection />

            <FeatureSection />

            <HowItWorks />

            <StatsSection />

            <CTASection />

            <Footer />

        </div>
    );
};

export default Home;