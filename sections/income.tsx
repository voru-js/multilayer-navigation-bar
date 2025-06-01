export default function Income() {
    return (
        <div className="flex flex-col py-2 px-11 gap-10">
      <h2 className="text-4xl font-semibold inter text-black">Income</h2>

      {/* Ключевые метрики дохода */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col bg-white shadow rounded-lg p-4 border border-gray-200">
          <h3 className="text-xl font-bold inter text-gray-700">Total Income</h3>
          <p className="text-2xl font-semibold text-black">$50,000</p>
          <p className="text-sm text-gray-500">All-time earnings</p>
        </div>
        <div className="flex flex-col bg-white shadow rounded-lg p-4 border border-gray-200">
          <h3 className="text-xl font-bold inter text-gray-700">Today</h3>
          <p className="text-2xl font-semibold text-black">$1,200</p>
          <p className="text-sm text-gray-500">Income earned today</p>
        </div>
        <div className="flex flex-col bg-white shadow rounded-lg p-4 border border-gray-200">
          <h3 className="text-xl font-bold inter text-gray-700">This Month</h3>
          <p className="text-2xl font-semibold text-black">$18,000</p>
          <p className="text-sm text-gray-500">Income earned this month</p>
        </div>
      </div>

      {/* Разбивка дохода */}
      <div className="flex flex-col gap-4">
        <p className="inter font-bold text-xs text-gray-400">BREAKDOWN</p>
        <div className="flex flex-row gap-4">
          <div className="flex-1 bg-gray-100 rounded-lg p-6 shadow">
            <h4 className="text-lg font-semibold text-gray-700">Income by Category</h4>
            <p className="text-sm text-gray-500 mt-2">
              Placeholder for a pie chart.
            </p>
          </div>
          <div className="flex-1 bg-gray-100 rounded-lg p-6 shadow">
            <h4 className="text-lg font-semibold text-gray-700">Monthly Trend</h4>
            <p className="text-sm text-gray-500 mt-2">
              Placeholder for a line chart.
            </p>
          </div>
        </div>
      </div>

      {/* Последние транзакции */}
      <div className="flex flex-col gap-2">
        <p className="inter font-bold text-xs text-gray-400">RECENT TRANSACTIONS</p>
        <div className="flex flex-col gap-1">
          {/* Транзакция 1 */}
          <div className="w-full flex flex-row items-center bg-blue-50 rounded-lg px-4 py-2 gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 1.343-3 3 0 .345.073.672.206.974l-2.1 2.1a1 1 0 001.414 1.414l2.1-2.1a3.001 3.001 0 004.28 0l2.1 2.1a1 1 0 001.414-1.414l-2.1-2.1A2.99 2.99 0 0015 11c0-1.657-1.343-3-3-3z"
              />
            </svg>
            <div className="flex flex-col w-full">
              <h1 className="font-semibold inter">Payment received</h1>
              <p className="text-sm text-gray-400">15 minutes ago</p>
            </div>
            <p className="text-lg font-bold text-black">$300.00</p>
          </div>
          {/* Транзакция 2 */}
          <div className="w-full flex flex-row items-center bg-blue-50 rounded-lg px-4 py-2 gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 1.343-3 3 0 .345.073.672.206.974l-2.1 2.1a1 1 0 001.414 1.414l2.1-2.1a3.001 3.001 0 004.28 0l2.1 2.1a1 1 0 001.414-1.414l-2.1-2.1A2.99 2.99 0 0015 11c0-1.657-1.343-3-3-3z"
              />
            </svg>
            <div className="flex flex-col w-full">
              <h1 className="font-semibold inter">Invoice Payment</h1>
              <p className="text-sm text-gray-400">1 hour ago</p>
            </div>
            <p className="text-lg font-bold text-black">$1,200.00</p>
          </div>
        </div>
      </div>
    </div>
    );
}