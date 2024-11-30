import auth from "../service/auth";
import { useState } from "react";

const CreateMabarForm = ({ profile }) => {
    const [selectedGame, setSelectedGame] = useState("");

    const handleButtonClick = async () => {
        const param = {
            created_at: new Date().toISOString(),
            created_by: {
                id: profile.ID,
                username: profile.username
            },
            session_end: "2024-11-09T15:00:00Z", // Replace with actual end time logic
            session_start: "2024-11-09T13:00:00Z", // Replace with actual start time logic
            game_name: selectedGame,
            is_finish: false,
            channel_id: "1266741824492408925"
        };

        try {
            const res = await auth.createMabar(param);
            console.log("Mabar created successfully:", res);
        } catch (error) {
            console.error("Error creating Mabar:", error);
        }
    };

    return (
        <form>
            <div className="w-full px-3 mb-6 pt-10 pb-10">
                {/* Option select */}
                <label className="font-light text-3xl">
                    Pick your game
                </label>
                <div className="relative pt-5 w-full">
                    <select
                        className="appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-4 px-5 pr-10 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xl"
                        value={selectedGame}
                        onChange={(e) => setSelectedGame(e.target.value)}
                    >
                        <option value="">Select a game</option>
                        <option value="Counter Strike 2">Counter Strike 2</option>
                        <option value="Deadlock">Deadlock</option>
                        <option value="Rainbow 6">Rainbow 6</option>
                        <option value="Valorant">Valorant</option>
                        <option value="Minecraft">Minecraft</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
                {/* Button */}
                <div className="pt-2.5 text-center">
                    <button onClick={handleButtonClick} type="button">Create Mabar</button>
                </div>
            </div>
        </form>
    );
};

export default CreateMabarForm;
