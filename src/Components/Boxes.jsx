
const Boxes = ({title , value , change , icon}) => {

    return <div className="bg-rose-200 rounded-xl border border-black p-8 flex flex-col justify-between gap-y-4">
        <div className="flex justify-between">
            <p>{title} </p>
            {icon}
        </div>
        <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{value}</h2>
        </div>
        <div className="flex gap-4">
            {change}
            <p>Since last month</p>
        </div>


    </div>
}


export default Boxes