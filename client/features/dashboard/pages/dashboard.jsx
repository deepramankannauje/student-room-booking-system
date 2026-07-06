
import DashboardHeader from "../components/DashboardHeader";
import DashboardHero from "../components/DashboardHero";
import StatsGrid from "../components/StatsGrid";
import RecentActivity from "../components/RecentActivity";
import DashboardFooter from "../components/DashboardFooter";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#08090D] text-white">

            <DashboardHeader />

            <main className="mx-auto max-w-7xl px-6 py-10">

                <DashboardHero />

                <StatsGrid />

                <RecentActivity />

            </main>

            <DashboardFooter />

        </div>
    );
};

export default Dashboard;