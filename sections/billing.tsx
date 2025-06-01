export default function Billing () {
    return (
        <div className="flex flex-col py-2 px-11 gap-10">
      <h2 className="text-4xl font-semibold inter text-black">Billing</h2>

      {/* Секция счетов */}
      <div className="flex flex-col gap-2">
        <p className="inter font-bold text-xs text-gray-400">INVOICES</p>
        <div className="flex flex-col gap-1">
          <div className="w-full h-15 flex flex-row bg-indigo-100 rounded-lg px-4 py-2 gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 w-8 h-auto text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m2 0a2 2 0 1 1-4 0m2 0a2 2 0 1 1-4 0"
              />
            </svg>
            <div className="flex flex-col w-full h-full">
              <h1 className="font-semibold inter">Invoice #123456</h1>
              <p className="text-sm text-gray-400">Paid on 15/05/2025</p>
            </div>
          </div>
          <div className="w-full h-15 flex flex-row bg-indigo-100 rounded-lg px-4 py-2 gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 w-8 h-auto text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m2 0a2 2 0 1 1-4 0m2 0a2 2 0 1 1-4 0"
              />
            </svg>
            <div className="flex flex-col w-full h-full">
              <h1 className="font-semibold inter">Invoice #123457</h1>
              <p className="text-sm text-gray-400">Due on 30/05/2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Секция методов оплаты */}
      <div className="flex flex-col gap-2">
        <p className="inter font-bold text-xs text-gray-400">PAYMENT METHODS</p>
        <div className="flex flex-col gap-1">
          <div className="w-full h-15 flex flex-row bg-gray-100 rounded-lg px-4 py-2 gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 w-8 h-auto text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 12h20M12 2v20"
              />
            </svg>
            <div className="flex flex-col w-full h-full">
              <h1 className="font-semibold inter">Visa **** 1234</h1>
              <p className="text-sm text-gray-400">Expires 07/27</p>
            </div>
          </div>
          <div className="w-full h-15 flex flex-row bg-gray-100 rounded-lg px-4 py-2 gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 w-8 h-auto text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 12h20M12 2v20"
              />
            </svg>
            <div className="flex flex-col w-full h-full">
              <h1 className="font-semibold inter">Mastercard **** 5678</h1>
              <p className="text-sm text-gray-400">Expires 11/24</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}