import { Link } from "react-router-dom";

export default function Twit({ item }) {
    return (
        <div
            key={item.author_id}
            className="px-6 py-7 border-b border-gray-300 last:border-b-0 flex gap-6 items-start"
        >
            <div className="rounded-full bg-gray-200 text-gray-600 font-black text-2xl text-center p-6 size-20 shrink-0">
                {item.name.split(" ").map((a) => a[0])}
            </div>
            <div>
                <Link to={`/profile/${item.nickname}`} className="flex gap-2 pt-1">
                <span className="font-bold">{item.name}</span>
                <span className="text-gray-600">@{item.nickname}</span>
                </Link>
                 <p className="mt-1">{item.content}</p>
                 <div className="flex gap-2 mt-2">
                <span>like: {item.likes}</span>
                <span>reply: {item.replies || 0}</span>
            </div>
      </div>
    </div>
    );
} 