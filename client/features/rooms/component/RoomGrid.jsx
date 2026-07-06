import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import { getAllRooms } from "../services/roomService";

import RoomCard from "./RoomCard";
import RoomLoading from "./RoomLoading";
import RoomEmpty from "./RoomEmpty";
import RoomSearch from "./RoomSearch";

const RoomGrid = () => {

    const [rooms, setRooms] = useState([]);

    const [filteredRooms, setFilteredRooms] = useState([]);

    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchRooms();

    }, []);

    useEffect(() => {

        const query = search.toLowerCase().trim();

        if (!query) {

            setFilteredRooms(rooms);

            return;

        }

        const filtered = rooms.filter((room) => {

            return (

                String(room.room_number ?? "")
                    .toLowerCase()
                    .includes(query)

                ||

                String(room.room_type ?? "")
                    .toLowerCase()
                    .includes(query)

                ||

                String(room.building ?? "")
                    .toLowerCase()
                    .includes(query)

            );

        });

        setFilteredRooms(filtered);

    }, [search, rooms]);

    const fetchRooms = async () => {

        try {

            setLoading(true);

            const response = await getAllRooms();

            let data = [];

            if (Array.isArray(response)) {

                data = response;

            } else if (Array.isArray(response.data)) {

                data = response.data;

            } else if (Array.isArray(response.rooms)) {

                data = response.rooms;

            }

            setRooms(data);

            setFilteredRooms(data);

        } catch (error) {

            console.error(error);

            toast.error(
                error?.message || "Failed to load rooms."
            );

            setRooms([]);

            setFilteredRooms([]);

        } finally {

            setLoading(false);

        }

    };

    return (

        <>

            <RoomSearch
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {loading ? (

                <RoomLoading />

            ) : filteredRooms.length === 0 ? (

                <RoomEmpty />

            ) : (

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {filteredRooms.map((room) => (

                        <RoomCard
                            key={room.id}
                            room={room}
                        />

                    ))}

                </div>

            )}

        </>

    );

};

export default RoomGrid;