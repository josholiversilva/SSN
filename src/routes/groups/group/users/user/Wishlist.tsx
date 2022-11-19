import React from "react";
import { useParams } from "react-router-dom";

const Wishlist = () => {
    const { user } = useParams();
    return (
        <>
        <div className="text-white">
            {user}'s Wishlist page
        </div>
        <div className="mt-2 flex flex-col w-full">
        <div className="overflow-x-auto">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow-md shadow-gray-400 overflow-hidden border-b border-gray-200 rounded-lg">
              <table className="bg-blue-200 min-w-full divide-y divide-red-400">
                <thead>
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">hi</th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">hi</th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">hi</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">hi</td>
                        <td className="px-6 py-4 whitespace-nowrap">hi</td>
                        <td className="px-6 py-4 whitespace-nowrap">hi</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Wishlist;