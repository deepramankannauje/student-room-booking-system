import { Search } from "lucide-react";

const RoomSearch = ({ value, onChange }) => {

    return (

        <div className="mb-8">

            <div className="relative">

                <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                    value={value}
                    onChange={onChange}
                    type="text"
                    placeholder="Search by room number or type..."
                    className="w-full rounded-xl border border-[#242833] bg-[#111319] py-3 pl-12 pr-4 outline-none focus:border-[#F2B441]"
                />

            </div>

        </div>

    );

};

export default RoomSearch;