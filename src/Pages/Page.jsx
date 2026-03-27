import React from 'react'
import Boxes from '../Components/Boxes'
import { Copy } from "lucide-react"
import { ShoppingCart, Check, Users, CreditCard } from 'lucide-react'
const Page = () => {
  return (
    <div className='bg-cover bg-center h-full w-full
    ' style={{backgroundImage: `url('https://images.unsplash.com/photo-1601722505649-d119deda842b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
        <div className="grid grid-cols-1 gap-4 p-6 flex-1 min-w-75 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <Boxes title="Orders" value={201} change={"8.2%"} icon={<Copy size={34}></Copy>} />
            <Boxes title="Approved" value="36" change="+3.4%" icon={<Check size={34} />} />
            <Boxes title="Month Total" value="25410" change="+0.2%" icon={<CreditCard size={34} />} />
            <Boxes title="Revenue" value="1352" change="+1.2%" icon={<CreditCard size={34} />} />
            <Boxes title="Orders" value={201} change={"8.2%"} icon={<Copy size={34}></Copy>} />
            <Boxes title="Approved" value="36" change="+3.4%" icon={<Check size={34} />} />
            <Boxes title="Month Total" value="25410" change="+0.2%" icon={<CreditCard size={34} />} />
            <Boxes title="Revenue" value="1352" change="+1.2%" icon={<CreditCard size={34} />} />
    </div>
    </div>
  )
}

export default Page
