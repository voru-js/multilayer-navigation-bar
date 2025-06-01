export default function Dashboard() {
   return ( <div className="flex flex-col py-2 px-11 gap-10">
      <h2 className="text-4xl font-semibold inter text-black">Dashboard</h2>

      {/* Обзор ключевых метрик */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col bg-white shadow rounded-lg p-4 border border-gray-200">
          <h3 className="text-xl font-bold inter text-gray-700">Total Revenue</h3>
          <p className="text-2xl font-semibold text-black">$25,000</p>
          <p className="text-sm text-gray-500">Compared to last month</p>
        </div>
        <div className="flex flex-col bg-white shadow rounded-lg p-4 border border-gray-200">
          <h3 className="text-xl font-bold inter text-gray-700">Active Users</h3>
          <p className="text-2xl font-semibold text-black">1,250</p>
          <p className="text-sm text-gray-500">Users online</p>
        </div>
        <div className="flex flex-col bg-white shadow rounded-lg p-4 border border-gray-200">
          <h3 className="text-xl font-bold inter text-gray-700">New Signups</h3>
          <p className="text-2xl font-semibold text-black">350</p>
          <p className="text-sm text-gray-500">This week</p>
        </div>
      </div>

      {/* Подробная статистика */}
      <div className="flex flex-col gap-4">
        <p className="inter font-bold text-xs text-gray-400">DETAILS</p>
        <div className="flex flex-row gap-4">
          <div className="flex-1 bg-gray-100 rounded-lg p-6 shadow">
            <h4 className="text-lg font-semibold text-gray-700">Sales Trend</h4>
            <p className="text-sm text-gray-500 mt-2">A placeholder for a sales chart.</p>
          </div>
          <div className="flex-1 bg-gray-100 rounded-lg p-6 shadow">
            <h4 className="text-lg font-semibold text-gray-700">User Activity</h4>
            <p className="text-sm text-gray-500 mt-2">A placeholder for a user activity graph.</p>
          </div>
        </div>
      </div>

      {/* Последние действия */}
      <div className="flex flex-col gap-2">
        <p className="inter font-bold text-xs text-gray-400">RECENT ACTIVITY</p>
        <div className="flex flex-col gap-1">
          <div className="w-full flex flex-row items-center bg-blue-50 rounded-lg px-4 py-2 gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-auto text-blue-600"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m6 0a3 3 0 1 1-6 0 3 3 0 1 1 6 0z" />
            </svg>
            <div className="flex flex-col w-full">
              <h1 className="font-semibold inter">User John Doe logged in</h1>
              <p className="text-sm text-gray-400">2 minutes ago</p>
            </div>
          </div>
          <div className="w-full flex flex-row items-center bg-blue-50 rounded-lg px-4 py-2 gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-auto text-blue-600"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
            </svg>
            <div className="flex flex-col w-full">
              <h1 className="font-semibold inter">New order received</h1>
              <p className="text-sm text-gray-400">Just now</p>
            </div>
          </div>
        </div>
      </div>
    </div> );
}
