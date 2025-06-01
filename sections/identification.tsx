export default function Identification() {
    return (
        <div className="flex flex-col py-2 px-11 gap-10">
      <h2 className="text-4xl font-semibold inter text-black">Identification</h2>
      
      {/* Идентификационные документы */}
      <div className="flex flex-col gap-2">
        <p className="inter font-bold text-xs text-gray-400">IDENTIFICATION DOCUMENTS</p>
        <div className="flex flex-col gap-1">
          
          {/* Passport */}
          <div className="w-full flex flex-row items-center bg-white shadow rounded-lg px-4 py-2 gap-4 border border-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {/* Иконка-паспорта (простой прямоугольник, символизирующий документ) */}
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2" className="stroke-current" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 8h8m-8 4h8"
              />
            </svg>
            <div className="flex flex-col w-full">
              <h1 className="font-semibold inter">Passport</h1>
              <p className="text-sm text-gray-400">Expires: 12/12/2030</p>
            </div>
            <button className="bg-blue-100 text-blue-800 inter font-bold px-4 py-2 rounded-lg">
              View
            </button>
          </div>

          {/* National ID */}
          <div className="w-full flex flex-row items-center bg-white shadow rounded-lg px-4 py-2 gap-4 border border-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {/* Иконка удостоверения личности */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2a10 10 0 100 20 10 10 0 000-20z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7v5l3 3"
              />
            </svg>
            <div className="flex flex-col w-full">
              <h1 className="font-semibold inter">National ID</h1>
              <p className="text-sm text-gray-400">Valid until: 08/2030</p>
            </div>
            <button className="bg-blue-100 text-blue-800 inter font-bold px-4 py-2 rounded-lg">
              View
            </button>
          </div>

          {/* Driver's License */}
          <div className="w-full flex flex-row items-center bg-white shadow rounded-lg px-4 py-2 gap-4 border border-gray-200">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
            >
              {/* Иконка водительских прав с символом автомобиля */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 9V7a5 5 0 015-5h0a5 5 0 015 5v2a3 3 0 013 3v8a3 3 0 01-3 3H7a3 3 0 01-3-3v-8a3 3 0 013-3z"
              />
            </svg>
            <div className="flex flex-col w-full">
              <h1 className="font-semibold inter">Driver's License</h1>
              <p className="text-sm text-gray-400">Expires: 04/2028</p>
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