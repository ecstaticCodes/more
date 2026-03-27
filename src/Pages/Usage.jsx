
const Usage = ({rating , earned , rate}) => {
return (
    <div  className="flex gap-4 border-2 border-black rounded-lg p-2 hover:bg-amber-50 cursor-pointer text-lg">
    <div className="border-0 p-2"><p>{rating}</p></div>
    <div className="border-0 border-l-2 p-2"><p>{earned}</p></div>
    <div className="border-0 border-l-2 p-2"><p className="">{rate}</p></div>
    </div>
)
}

export default Usage
