export default function Subscriptions() {
    return (
       <div className="flex flex-col py-2 px-11 gap-10">
      <h2 className="text-4xl font-semibold inter text-black">Subscriptions</h2>

      {/* Активная подписка */}
      <div className="flex flex-col gap-2">
        <p className="inter font-bold text-xs text-gray-400">ACTIVE SUBSCRIPTION</p>
        <div className="flex flex-col gap-1">
          <div className="w-full h-20 flex flex-row bg-indigo-100 shadow rounded-lg px-4 py-2 gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4m0 4h.01"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12v.01"
              />
            </svg>
            <div className="flex flex-col w-full">
              <h1 className="font-semibold inter">Pro Plan</h1>
              <p className="text-sm text-gray-400">Renews on 30/06/2025</p>
            </div>
            <button className="bg-blue-100 px-4 py-2 inter font-bold text-blue-800 rounded-lg">
              Manage
            </button>
          </div>
        </div>
      </div>

      {/* Доступные тарифы */}
      <div className="flex flex-col gap-2">
        <p className="inter font-bold text-xs text-gray-400">AVAILABLE PLANS</p>
        <div className="flex flex-col gap-1">
          <div className="w-full h-20 flex flex-row bg-gray-100 rounded-lg px-4 py-2 gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-3-3v6"
              />
            </svg>
            <div className="flex flex-col w-full">
              <h1 className="font-semibold inter">Standard Plan</h1>
              <p className="text-sm text-gray-400">Price: $9.99/month</p>
            </div>
            <button className="bg-green-100 px-4 py-2 inter font-bold text-green-800 rounded-lg">
              Subscribe
            </button>
          </div>
          <div className="w-full h-20 flex flex-row bg-gray-100 rounded-lg px-4 py-2 gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-3-3v6"
              />
            </svg>
            <div className="flex flex-col w-full">
              <h1 className="font-semibold inter">Premium Plan</h1>
              <p className="text-sm text-gray-400">Price: $19.99/month</p>
            </div>
            <button className="bg-green-100 px-4 py-2 inter font-bold text-green-800 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    );
}