import React from 'react'
import Bubble from './Bubble'


const Card = () => {
return (
    <div className='bg-rose-200'>
    <div className='m-2 grid gap-2 grid-cols-1 justify-center items-center max-w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 '>
        <Bubble name="Chloe Harrison" title="Product Designer" skills={["Figma", "UX Design"]} rating="4.5" earned="$15K+" rate="$80/hr"/>

<Bubble name="James Carter" title="Frontend Developer" skills={["React", "Tailwind"]} rating="4.8" earned="$22K+" rate="$95/hr" />

<Bubble name="Sofia Mendes" title="UI Designer" skills={["Adobe XD", "Illustrator"]} rating="4.3" earned="$18K+" rate="$75/hr" />

<Bubble name="Liam Thompson" title="Backend Developer" skills={["Node.js", "MongoDB"]} rating="4.7" earned="$30K+" rate="$110/hr" />

<Bubble name="Aisha Patel" title="Mobile Developer" skills={["Flutter", "Firebase"]} rating="4.6" earned="$25K+" rate="$100/hr" />

<Bubble name="Noah Williams" title="Full Stack Developer" skills={["Next.js", "PostgreSQL"]} rating="4.9" earned="$40K+" rate="$130/hr" />

    </div>
    </div>
)
}

export default Card
