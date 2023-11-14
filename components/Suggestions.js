import minifaker from "minifaker";
import { useEffect, useState } from "react";

export default function Suggestions() {
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    const suggestion = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: "en" }).toLocaleLowerCase(),
      jobTitle: minifaker.jobTitle(),
      id: i,
    }));

    setSuggestion(suggestion);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400">Suggestion for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestion.map((suge) => (
        <div className="flex items-center justify-between mt-3">
          <img
            className="h-10 rounded-full border p-[2px]"
            src={`https://i.pravatar.cc/150?img=${Math.ceil(
              Math.random() * 70
            )}`}
            alt="User_Image"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{suge.username}</h2>
            <h3 className="text-sm text-gray-400 truncate w-[230px]">
              {suge.jobTitle}
            </h3>
          </div>
          <button className="text-blue-400 font-semibold text-sm">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}
