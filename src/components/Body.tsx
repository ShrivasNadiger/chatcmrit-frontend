import Chatcards from "./Chatcards"

function Body() {
    return (
        <div className="w-full my-2">
            <div className='w-full sm:mx-auto sm:w-[85vw] pb-20 bg-orange-200 flex flex-col-reverse'>
                <Chatcards />
            </div>
        </div>
    )
}

export default Body