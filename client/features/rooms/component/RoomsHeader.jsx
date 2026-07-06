import { useAuth } from "../../../src/context/AuthContext";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const RoomsHeader = () => {

    const { user } = useAuth();

    return (

        <header className="border-b border-[#242833]">

            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

                <div>

                    <h1 className="text-3xl font-bold">

                        Rooms

                    </h1>

                    <p className="mt-1 text-gray-400">

                        Browse available university rooms

                    </p>

                </div>

                {user?.role === "admin" && (

                    <Link
                        to="/rooms/create"
                        className="flex items-center gap-2 rounded-xl bg-[#F2B441] px-5 py-3 font-semibold text-[#1A1206] hover:bg-[#F5C468]"
                    >

                        <Plus size={18} />

                        Add Room

                    </Link>

                )}

            </div>

        </header>

    );

};

export default RoomsHeader;