

const Name = ({Name , title}) => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-2">
      <h2 className="text-xl font-bold">{Name}</h2>
      <p className="text-lg bg-gray-300 border rounded-lg flex justify-center items-center p-2 text-blue-500 cursor-pointer hover:bg-amber-50 hover:text-blue-400">{title}</p>
    </div>
  )
}

export default Name