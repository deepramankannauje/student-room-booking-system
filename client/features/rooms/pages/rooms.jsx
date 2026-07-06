import RoomsHeader from "../component/RoomsHeader";
import RoomGrid from "../component/RoomGrid";

const Rooms = () => {

    return (

        <div className="min-h-screen bg-[#08090D] text-white">

            <RoomsHeader />

            <main className="mx-auto max-w-7xl px-6 py-8">

                <RoomGrid />

            </main>

        </div>

    );

};

export default Rooms;