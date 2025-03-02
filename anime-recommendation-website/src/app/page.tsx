import { data } from "./tempData";
export default function Home() {
    return (
        <div className="bg-blue-800 min-h-screen p-4">
            <h2 className="font-bold text-center text-white text-xl">Anime Advisor</h2>
            <div className="flex flex-row flex-wrap justify-start">
                {data.map((item) => (
                    <div className="border-black border-1 border-solid bg-blue-400 mb-1 max-w-50 mr-1">
                        <div className="font-bold text-l text-center text-white pl-0.5 pr-0.5">
                            {item.node.title}
                        </div>
                        <div className="text-align-left font-semibold">
                            {item.node.id}
                        </div>
                        <div>
                            <img
                                className="border-solid border-black"
                                src={item.node.main_picture.medium}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
