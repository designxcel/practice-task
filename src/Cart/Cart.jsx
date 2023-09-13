

const Cart = ({actors,remainingCost,totalCost}) => {
    // console.log(actors)
    return (
        <div className="p-6 m-5 bg-slate-200 rounded-lg md:w-96 text-center">
            <p className="text-xl font-bold">Your Team</p>
            <h2 className="bg-white text-green-700 p-4 m-4 rounded-lg list-decimal font-bold">Total Actor: {actors.length}</h2>
            
            {
                actors.map(actor => (
                    <li className="bg-white p-4 m-4 rounded-lg list-decimal font-bold">{actor.name}</li>
                ))
            }
            <h3 className="bg-white text-purple-600 p-4 m-4 rounded-lg list-decimal font-bold">Total Cost: {totalCost}</h3>
            <h3 className="bg-white text-red-600 p-4 m-4 rounded-lg list-decimal font-bold">Remaining Amount: {remainingCost}</h3>
            
        </div>
    );
};

export default Cart;