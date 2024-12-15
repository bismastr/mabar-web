import React from 'react';

const MabarList = ({ session }) => {
    const members = session && session.members ? session.members : [];
    const remainingUsers = members.length > 1 ? members.length - 1 : 0;

    return (
        <div className="flex flex-row space-x-10">
            {/* Game Icon */}
            <div className="flex-none w-1/12 h-14 flex">
                <img src={session.game_info.icon_url} className="w-8 h-8 rounded-lg object-cover" alt="image" />
            </div>
            {/* Game Name */}
            <div className="flex-none w-1/5 h-14 flex">
                {session.game_info.name}
            </div>
            {/* Session Title Name */}
            <div className="flex-grow h-14 flex">
                Join Session game
            </div>
            {/* Icon Game */}
            <div className="flex-grow h-14 flex">
                <div className="flex -space-x-4 rtl:space-x-reverse">
                    {session.members && session.members.slice(0, 1).map((m, index) => (
                        <img
                            key={index}
                            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                            src={m.avatar_url}
                            alt=""
                        />
                    ))}
                    {remainingUsers > 0 && (
                        <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">
                            +{remainingUsers}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MabarList;