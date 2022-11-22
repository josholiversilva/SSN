import React, { useRef } from "react";

const WishlistForm = () => {
  const itemRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const uuid = localStorage.getItem("uuid") || ""

  const handleSubmit = (event:any) => {
    let item = ""
    let price = "" 
    let description = ""
    let url = ""
    console.log("submitting!")
    if (itemRef.current != null) {
      console.log("itemRef = " + itemRef.current.value)
      item = itemRef.current.value
    }
    if (priceRef.current != null) {
      console.log("priceRef = " + priceRef.current.value)
      price = priceRef.current.value
    }
    if (urlRef.current != null) {
      console.log("urlRef = " + urlRef.current.value)
      url = urlRef.current.value
    }
    if (descriptionRef.current != null) {
      console.log("descriptionRef = " + descriptionRef.current.value)
      description = descriptionRef.current.value
    }

    postWishlist(item, price, url, description)
    event.target.reset();
  }

  const postWishlist = async (item: string, price: string, url: string, description: string) => {
      try {
      const resp = await fetch(`http://localhost:8080/api/v1/wishlist/${uuid}`, {
          mode:'cors',
          method: 'POST',
          body: JSON.stringify({
            "year": 2022,
            "item": item,
            "price": price,
            "description": description,
            "url": url
          }),
          headers: {
            'Content-Type': 'application/json'
          }
      });
      } catch(e) {
          console.log(e)
      }
  }
    return (
      <div className="flex flex-col justify-center h-full overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
            Wishlist
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label>
                <span className="text-gray-700">Item Name</span>
                <input
                  type="text"
                  name="item"
                  ref={itemRef}
                  className="
  
              w-full
              block px-16 py-2 mt-2
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
              text-black
            "
                  placeholder="Cool socks"
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="text-gray-700">Price</span>
                <input
                  type="text"
                  name="price"
                  ref={priceRef}
                  className="
  
              w-full
              block px-16 py-2 mt-2
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
              text-black
            "
                  placeholder="20"
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="text-gray-700">Optional Purchase URL/Link</span>
                <input
                  type="text"
                  name="url"
                  ref={urlRef}
                  className="
              block
              w-full
              mt-2 px-16 py-2
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
              text-black
            "
                  placeholder="https://www.amazon.com/JDQ-Pairs-Novelty-Funny-Socks/dp/B0B5KXQ7MC/ref=sr_1_2_sspa?crid=27GXHZLOQP8OC&keywords=cool+socks&qid=1668987818&sprefix=cool+sock%2Caps%2C527&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="text-gray-700">Description</span>
                <textarea
                  name="description"
                  ref={descriptionRef}
                  placeholder="Any color in shoe size 7 please!"
                  className="
              block
              w-full
              mt-2 px-16 py-8
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
              text-black
            "
                ></textarea>
              </label>
            </div>
  
            <div className="mb-6">
              <button
                type="submit"
                className="
              h-10
              px-5
              text-indigo-100
              bg-indigo-700
              rounded-lg
              transition-colors
              duration-150
              focus:shadow-outline
              hover:bg-indigo-800
            "
              >
                Add to Wishlist
              </button>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    );
  };
  
  export default WishlistForm;