export default function Documents() {
    return (
        <div className="flex flex-col py-2 px-11 gap-10">
      <h2 className="text-4xl font-semibold inter text-black">Documents</h2>

      {/* My Documents Section */}
      <div className="flex flex-col gap-2">
        <p className="inter font-bold text-xs text-gray-400">MY DOCUMENTS</p>
        <div className="flex flex-col gap-1">
          {/* Документ 1 */}
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
                d="M19 7l-.867-2.598A2 2 0 0016.681 3H7.319a2 2 0 00-1.452.402L5 5m14 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7m14 0H5" 
              />
            </svg>
            <div className="flex flex-col w-full">
              <h1 className="font-semibold inter">Contract Agreement</h1>
              <p className="text-sm text-gray-400">Uploaded on 05/06/2025</p>
            </div>
            <button className="bg-blue-100 text-blue-800 inter font-bold px-4 py-2 rounded-lg">
              View
            </button>
          </div>
          {/* Документ 2 */}
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
                d="M19 7l-.867-2.598A2 2 0 0016.681 3H7.319a2 2 0 00-1.452.402L5 5m14 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7m14 0H5" 
              />
            </svg>
            <div className="flex flex-col w-full">
              <h1 className="font-semibold inter">User Manual</h1>
              <p className="text-sm text-gray-400">Uploaded on 12/05/2025</p>
            </div>
            <button className="bg-blue-100 text-blue-800 inter font-bold px-4 py-2 rounded-lg">
              View
            </button>
          </div>
        </div>
      </div>

      {/* Shared Documents Section */}
      <div className="flex flex-col gap-2">
        <p className="inter font-bold text-xs text-gray-400">SHARED DOCUMENTS</p>
        <div className="flex flex-col gap-1">
          {/* Документ, которым поделились */}
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
                d="M19 7l-.867-2.598A2 2 0 0016.681 3H7.319a2 2 0 00-1.452.402L5 5m14 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7m14 0H5" 
              />
            </svg>
            <div className="flex flex-col w-full">
              <h1 className="font-semibold inter">Invoice Q3 2024</h1>
              <p className="text-sm text-gray-400">Shared by Admin on 04/06/2025</p>
            </div>
            <button className="bg-blue-100 text-blue-800 inter font-bold px-4 py-2 rounded-lg">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
    );
}