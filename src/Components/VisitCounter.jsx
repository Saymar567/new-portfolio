import { useState, useEffect } from "react";
import supabase from "../../supabaseClient";

const VisitCounter = () => {
    const [visits, setVisits] = useState(0);

    useEffect(() => {
        const visitCount = async () => {
            const { data, error } = await supabase
                .from('visits')
                .select('count')
                .single()

            if (error) { console.error(error) }
            else {
                setVisits(data.count);
                await supabase
                    .from('visits')
                    .update({ count: data.count + 1 })
                    .eq('id', 1);
            }
        }
        visitCount();

    }, [])

    return (
        <div>
            <p>Number of visits: {visits}</p>
        </div>
    )
}

export default VisitCounter