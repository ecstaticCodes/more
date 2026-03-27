
const BiBoxes = ({head , val}) => {
    return (
        <div>
            <div className="bg-white rounded-xl border border-black p-4 flex flex-col justify-between h-full">
            <div className="text-xl font-bold font-sans">{head}</div>
            <div className="text-3xl font-bold"> 
                {val}
                <p className="text-base font-thin">Since Last Month</p></div>
            <div></div>


            </div>

        </div> 
    )
}

export default BiBoxes