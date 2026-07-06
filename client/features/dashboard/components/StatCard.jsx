const StatCard = ({
    title,
    value,
    icon: Icon,
    color = "#F2B441",
    subtitle,
}) => {
    return (
        <div
            className="
                group
                rounded-2xl
                border
                border-[#242833]
                bg-[#111319]
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#F2B441]/40
                hover:shadow-[0_10px_35px_rgba(242,180,65,0.08)]
            "
        >

            <div className="flex items-start justify-between">

                <div>

                    <p className="text-sm text-gray-400">

                        {title}

                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-white">

                        {value}

                    </h2>

                    {subtitle && (

                        <p className="mt-2 text-sm text-gray-500">

                            {subtitle}

                        </p>

                    )}

                </div>

                <div
                    className="
                        rounded-2xl
                        p-4
                        transition-transform
                        duration-300
                        group-hover:scale-110
                    "
                    style={{
                        backgroundColor: `${color}15`,
                    }}
                >

                    <Icon
                        size={28}
                        style={{ color }}
                    />

                </div>

            </div>

        </div>
    );
};

export default StatCard;