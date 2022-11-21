import React, { useEffect, useState } from "react";

const WishlistTable = () => {
    const uuid = "3f68e019-d16a-4593-ae58-adc4da60a6f8"
    const [wishlist, setWishlist] = useState([])
    
    const fetchWishlist = async () => {
        var data: never[] = []
        try {
        const resp = await fetch(`http://localhost:8080/api/v1/wishlist/${uuid}`, {
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
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Item</th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">URL</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {
                        wishlist.map((wishlistItem: any) => {
                            console.log("item = " + wishlistItem.name)
                                return (
                                    <tr>
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