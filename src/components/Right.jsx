import NormalButton from "./NormalButton";

const Right = () => {
    return (
        <div className="bg-[#666666] p-6 flex gap-4 flex-col justify-center items-center">
            <h2 className="font-bold text-center text-lg">Trending songs</h2>
            <div className="flex flex-col gap-3">
                <NormalButton />
                <NormalButton />
                <NormalButton />
                <NormalButton />
                <NormalButton />
            </div>
            <button className="border border-black rounded-md bg-orange-500 px-4 py-2 font-semibold w-50">
                View more
            </button>
        </div>
    )
}

export default Right