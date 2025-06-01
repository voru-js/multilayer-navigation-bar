export default function Notifications() {
    return (
        <div className="flex flex-col py-2 px-11 gap-10">
      <h2 className="text-4xl font-semibold inter text-black">Notifications</h2>

      {/* Раздел «RECENT UPDATES» */}
      <div className="flex flex-col gap-2">
        <p className="inter font-bold text-xs text-gray-400">RECENT UPDATES</p>
        <div className="flex flex-col gap-1">
          <div className="w-full h-15 flex flex-row bg-green-100 rounded-lg px-4 py-2 gap-4">
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
                d="M12 8v4m0 4h.01m-6.938 4h13.856c1.07 0 1.792-1.156 1.12-2.096l-6.928-10.5a1.5 1.5 0 0 0-2.244 0l-6.928 10.5c-.672.94.05 2.096 1.12 2.096z"
              />
            </svg>
            <div className="flex flex-col w-full h-full">
              <h1 className="font-semibold inter">System Update Completed</h1>
              <p className="text-sm text-gray-400">
                Your system updated successfully.
              </p>
            </div>
          </div>
          <div className="w-full h-15 flex flex-row bg-purple-100 rounded-lg px-4 py-2 gap-4">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.178V11a6 6 0 1 0-12 0v3.18c0 .703-.275 1.38-.76 1.88L4 17h5"
              />
            </svg>
            <div className="flex flex-col w-full h-full">
              <h1 className="font-semibold inter">New Message Received</h1>
              <p className="text-sm text-gray-400">
                You have 3 unread messages.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Раздел «SYSTEM NOTIFICATIONS» */}
      <div className="flex flex-col gap-2">
        <p className="inter font-bold text-xs text-gray-400">SYSTEM NOTIFICATIONS</p>
        <div className="flex flex-col gap-1">
          <div className="w-full h-15 flex flex-row bg-yellow-100 rounded-lg px-4 py-2 gap-4">
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
                d="M13 16h-1v-4h-1m1-4h.01M12 12v.01"
              />
            </svg>
            <div className="flex flex-col w-full h-full">
              <h1 className="font-semibold inter">Security Alert</h1>
              <p className="text-sm text-gray-400">
                Suspicious login attempt detected.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    );
}