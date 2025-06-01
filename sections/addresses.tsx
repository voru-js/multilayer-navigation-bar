export default function Addresses() {
    return (
        <div className="flex flex-col py-2 px-11 gap-10">
      <h2 className="text-4xl font-semibold inter text-black">Addresses</h2>

      {/* Основной адрес */}
      <div className="flex flex-col gap-2">
        <p className="inter font-bold text-xs text-gray-400">PRIMARY ADDRESS</p>
        <div className="w-full flex flex-row items-center bg-white shadow rounded-lg px-4 py-2 gap-4 border border-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10l9-7 9 7v11a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5H9v5a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"
            />
          </svg>
          <div className="flex flex-col w-full">
            <h1 className="font-semibold inter">Home</h1>
            <p className="text-sm text-gray-400">
              123 Main Street, Apt 4B, Springfield, IL 62704
            </p>
          </div>
          <button className="bg-blue-100 text-blue-800 inter font-bold px-4 py-2 rounded-lg">
            Edit
          </button>
        </div>
      </div>

      {/* Сохранённые адреса */}
      <div className="flex flex-col gap-2">
        <p className="inter font-bold text-xs text-gray-400">SAVED ADDRESSES</p>
        <div className="flex flex-col gap-1">
          {/* Адрес 1 */}
          <div className="w-full flex flex-row items-center bg-gray-100 shadow rounded-lg px-4 py-2 gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10l9-7 9 7v11a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5H9v5a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"
              />
            </svg>
            <div className="flex flex-col w-full">
              <h1 className="font-semibold inter">Office</h1>
              <p className="text-sm text-gray-400">
                456 Business Rd, Suite 800, Metropolis, NY 10001
              </p>
            </div>
            <button className="bg-blue-100 text-blue-800 inter font-bold px-4 py-2 rounded-lg">
              Edit
            </button>
          </div>
          {/* Адрес 2 */}
          <div className="w-full flex flex-row items-center bg-gray-100 shadow rounded-lg px-4 py-2 gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10l9-7 9 7v11a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5H9v5a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"
              />
            </svg>
            <div className="flex flex-col w-full">
              <h1 className="font-semibold inter">Vacation Home</h1>
              <p className="text-sm text-gray-400">
                789 Beachside Ave, Miami, FL 33101
              </p>
            </div>
            <button className="bg-blue-100 text-blue-800 inter font-bold px-4 py-2 rounded-lg">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
    );
}