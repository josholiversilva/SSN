import React from "react";

const Home = () => {
    return (
        <div className='text-3xl font-bold h-screen w-full bg-black'>
            <div className="bg-white h-10">hi</div>
            <Card year={2022} />
            <CreateCard />
      </div>
    )
}

export default Home;