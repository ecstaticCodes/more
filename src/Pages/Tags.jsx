
const Tags = ({skills}) => {
return (
    <div className="flex gap-5">
        {skills.map((skill) => (
            <span className="bg-rose-800 text-md - text-amber-50 p-2 flex gap-5 justify-center rounded-xl hover:bg-amber-50 cursor-pointer hover:text-rose-800" key={skill}> {skill} </span>
        ))}

    </div>
)
}

export default Tags