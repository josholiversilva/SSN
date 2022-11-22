import React, { useEffect, useState } from "react";

interface WishlistTableProps {
    isEdit?:boolean;
}

const WishlistTable = (params:WishlistTableProps) => {
    const uuid = "3f68e019-d16a-4593-ae58-adc4da60a6f8"
    const [wishlist, setWishlist] = useState([])
    console.log('is edit = ' + params.isEdit)
    
    const fetchWishlist = async () => {
        var data: never[] = []
        try {
        const resp = await fetch(`http://localhost:8080/api/v1/wishlist/${uuid}/2022`, {
            mode:'cors',
            method: 'GET',
        });
        data = await resp.json();
        } catch(e) {
            console.log(e)
        }
        console.log(data)
        setWishlist(data)
    }

    const deleteItem = async (itemId: string) => {
        try {
            const resp = await fetch(`http://localhost:8080/api/v1/wishlist`, {
                mode:'cors',
                method: 'DELETE',
                body: JSON.stringify({
                    "id": itemId
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch(e) {
            console.log(e)
        }
        console.log("Deleted!")
        window.location.reload();
    }

    useEffect(() => {
        fetchWishlist()
        console.log("wishlist = " + wishlist)
    }, [])

    return (
        <>
        <div className="mt-2 flex flex-col w-full">
        <div className="overflow-x-auto">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow-md shadow-gray-400 overflow-hidden border-b border-gray-200 rounded-lg">
              <table className="bg-blue-200 min-w-full divide-y divide-gray-400">
                <thead>
                    <tr>
                        {params.isEdit ? <th scope="col"></th> : <></>}
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Item</th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">URL</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {
                        wishlist.map((wishlistItem: any) => {
                                return (
                                    <tr>
                                        {params.isEdit 
                                            ? <td className="px-6 py-4 whitepace-nowrap"><button onClick={() => deleteItem(wishlistItem.id)} type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button></td>
                                            : <></>
                                        }
                                        <td className="px-6 py-4 whitespace-nowrap text-black">{wishlistItem.item}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-black">${wishlistItem.price}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-black">{wishlistItem.description}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-black">{wishlistItem.url}</td>
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default WishlistTable;