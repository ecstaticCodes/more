import Name from "./Name"
import Tags from "./Tags"
import Usage from "./Usage"
import Buttons from "./Buttons"



const Bubble = ({name , title , skills ,rating, earned, rate
}) => {
    return (
        <div className="border border-black flex bg-gray-300 flex-col p-4 justify-between items-center h-[50vh] rounded-2xl">
            <Name Name={name} title={title} />
            <Tags skills={skills} />
            <Usage rating={rating} earned={earned} rate={rate} />
            <Buttons />
        </div>
    )
}

export default Bubble