import React from "react";

const CreateCard = () => {
    const goToCreateCard = () => {
        console.log("Going to create")
    }

    return (
        <button className="mr-8 hover:bg-gray-800 rounded-lg w-64 h-56">
            <div className="w-full h-full rounded overflow-hidden shadow-lg text-2xl text-white" 
                onClick={() => goToCreateCard()}>
                +
            </div>
        </button>
    )
}

export default CreateCard;