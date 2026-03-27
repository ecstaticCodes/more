import Boxes from "./Boxes";
import { Copy } from "lucide-react"
import { ShoppingCart, Check, Users, CreditCard } from 'lucide-react'
import BiBoxes from "./BiBoxes";
const Main = () => {
    return (
        <div className="flex flex-wrap gap-4 p-6 border border-black">
            <div className="grid grid-cols-2 gap-4 p-6 flex-1 min-w-75">
            <Boxes title="Orders" value={201} change={"8.2%"} icon={<Copy size={34}></Copy>} />
            <Boxes title="Approved" value="36" change="+3.4%" icon={<Check size={34} />} />
            <Boxes title="Month Total" value="25410" change="+0.2%" icon={<CreditCard size={34} />} />
            <Boxes title="Revenue" value="1352" change="+1.2%" icon={<CreditCard size={34} />} />
    </div>
    <div className="grid grid-cols-2 gap-4 min-w-45 self-stretch p-6 flex-1">
        <BiBoxes head="Users" val={4.89} />
        <BiBoxes head="Subscriptions" val={1.201} />
    </div>
        </div>
    )
}
export default Main