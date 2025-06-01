export default function Delivery() {
    return (
        <div className="flex flex-col py-2 px-11 gap-10">
      <h2 className="text-4xl font-semibold inter text-black">Delivery</h2>

      {/* Блок: Default Delivery Option */}
      <div className="flex flex-col gap-2">
        <p className="inter font-bold text-xs text-gray-400">DEFAULT DELIVERY OPTION</p>
        <div className="w-full flex flex-row items-center bg-white shadow rounded-lg px-4 py-2 gap-4 border border-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17V9a1 1 0 011-1h3.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V17m0 0a2 2 0 11-4 0m4 0a2 2 0 10-4 0m-8 0v-5a1 1 0 011-1h3m10 6h.01"
            />
          </svg>
          <div className="flex flex-col w-full">
            <h1 className="font-semibold inter">Standard Shipping</h1>
            <p className="text-sm text-gray-400">
              Estimated delivery: 3-5 business days
            </p>
          </div>
          <button className="bg-blue-100 text-blue-800 inter font-bold px-4 py-2 rounded-lg">
            Edit
          </button>
        </div>
      </div>

      {/* Блок: Available Delivery Methods */}
      <div className="flex flex-col gap-2">
        <p className="inter font-bold text-xs text-gray-400">AVAILABLE DELIVERY METHODS</p>
        <div className="flex flex-col gap-1">
          {/* Вариант 1 — Standard Shipping */}
          <div className="w-full flex flex-row items-center bg-gray-100 shadow rounded-lg px-4 py-2 gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17V9a1 1 0 011-1h3.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V17m0 0a2 2 0 11-4 0m4 0a2 2 0 10-4 0m-8 0v-5a1 1 0 011-1h3m10 6h.01"
              />
            </svg>
            <div className="flex flex-col w-full">
              <h1 className="font-semibold inter">Standard Shipping</h1>
              <p className="text-sm text-gray-400">Delivery in 3-5 days – Free</p>
            </div>
            <button className="bg-blue-100 text-blue-800 inter font-bold px-4 py-2 rounded-lg">
              Select
            </button>
          </div>

          {/* Вариант 2 — Express Delivery */}
          <div className="w-full flex flex-row items-center bg-gray-100 shadow rounded-lg px-4 py-2 gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17V9a1 1 0 011-1h3.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V17m0 0a2 2 0 11-4 0m4 0a2 2 0 10-4 0m-8 0v-5a1 1 0 011-1h3m10 6h.01"
              />
            </svg>
            <div className="flex flex-col w-full">
              <h1 className="font-semibold inter">Express Delivery</h1>
              <p className="text-sm text-gray-400">
                Delivery in 1-2 days – $9.99 extra
              </p>
            </div>
            <button className="bg-blue-100 text-blue-800 inter font-bold px-4 py-2 rounded-lg">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
    );
}