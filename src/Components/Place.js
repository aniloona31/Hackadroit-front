import React from 'react'

function Place({placeName,address,description,image}) {
    return (
        <>
            <div className="container mt-8 pt-8 md:p-0">

                <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">

                    <div className="bg-cover bg-bottom border rounded w-full md:w-1/3 h-64 md:h-auto relative" style={{ backgroundImage: `url(${image})`, height: 220 }}>
                        {/* <div className="absolute text-xl">
                            <i onClick={changeWishlist} className={`fa fa-heart text-${heart} ml-4 mt-4 cursor-pointer`}></i>
                        </div> */}
                    </div>
                    <div className="bg-indigo-200 w-full md:w-2/3">
                        <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                            <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                                <div className="w-full lg:w-1/5 lg:border-right lg:border-solid rounded text-center md:text-left">
                                    <h3 className='font-bold italic'>{placeName}</h3>
                                    <p className="font-bold mb-0 mt-3 text-grey-dark text-sm italic">{address}</p>
                                    <hr className="w-1/4 md:ml-0 mt-4  border rounded lg:hidden" />
                                </div>
                                <div className="w-full lg:w-3/5 lg:px-3">
                                    <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                                        {description}
                                    </p>
                                </div>

                                {/* <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                                    <button onClick={goToPhotos} className=" text-black bg-indigo-200 tracking-wide hover:shadow-lg mb-2 border border-solid rounded  w-1/3 lg:w-full py-2">Images</button>
                                    <button onClick={goToReviews} className=" text-black bg-indigo-200 tracking-wide hover:shadow-lg border border-solid rounded  w-1/3 lg:w-full py-2">Reviews</button>
                                    <button onClick={goToPayment} className=" text-black bg-indigo-200 tracking-wide hover:shadow-lg border border-solid rounded  w-1/3 lg:w-full py-2 mt-2">Book Ticket</button>
                                    <button onClick={() => changeLike("up")}>{(up === false) ? <i className={`far flex mx-4 mt-4 cursor-pointer text-indigo-400 fa-thumbs-up fa-lg`}></i> : <i className="fas fa-thumbs-up mx-4 text-indigo-400 mt-4 fa-lg cursor-pointer"></i>}</button>
                                    <button onClick={() => changeLike("down")}>{(down === false) ? <i className={`far fa-thumbs-down flex text-indigo-400 cursor-pointer fa-lg`}></i> : <i className="fas fa-thumbs-down text-indigo-400 fa-lg cursor-pointer"></i>}</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Place