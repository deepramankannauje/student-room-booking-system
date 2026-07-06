import AdminSidebar from "../components/AdminSidebar";
import CreateRoomForm from "../components/CreateRoomForm";

const CreateRoom = () => {

    return (

        <div className="min-h-screen bg-[#08090D] text-white">

            <div className="flex">

                

                <main className="flex-1 p-8">

                    <h1 className="mb-8 text-3xl font-bold">

                        Create Room

                    </h1>

                    <div className="max-w-3xl">

                        <CreateRoomForm />

                    </div>

                </main>

            </div>

        </div>

    );

};

export default CreateRoom;