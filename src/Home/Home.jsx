import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";


const Home = () => {
    const [selectedActors, setSelectedActors] = useState([])
    const [actors, setActors] = useState([])
    const [remainingCost, setRemainingCost] = useState(0)
    const [totalCost,setTotalCost] = useState(0)

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setSelectedActors(data))
    },[])

    const handleActorProfile = (actor) =>{
        const isExist = actors.find(item => item.id == actor.id)

        let count = actor.salary;
        if(isExist){
            alert ("already Booked")
        }
        else{
            actors.forEach(item =>{
                count = count + item.salary;
            })
            const remainingAmount = 50000 - count;

            if(count > 50000){
                return alert("You reached your maximum value");
            }
            else{
                setRemainingCost(remainingAmount)
            setTotalCost(count)
            const newCartList = [...actors, actor]
            setActors(newCartList)
            }
            
        }
        
    }
    return (
        <div>
            
            <div className="flex flex-col lg:flex-row md:max-w-7xl md:mx-auto bg-slate-300 rounded-lg">
                <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        selectedActors.map((actor) => (
                            <div className="md:w-64 h-[400px] bg-slate-200 text-center p-6 m-5 rounded-lg space-y-2">
                                <div className="flex justify-center">
                                    <img className="rounded-full" src={actor.image} alt="" />
                                </div>
                                
                                <h3 className="text-lg font-medium">Name: {actor.name}</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="flex items-center justify-between">
                                    <p>Salary: $ {actor.salary}</p>
                                    <p>Role: {actor.role}</p>
                                </div>
                                <div>
                                    <button onClick={() => handleActorProfile(actor)} className="bg-blue-600 px-10 py-2 rounded-lg text-xl text-white font-medium">Add</button>
                                </div>
                                
                    </div>
                        ))
                    }
                </div>
                <div>
                    <Cart 
                        actors={actors}
                        remainingCost={remainingCost}
                        totalCost={totalCost}
                        ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;