export default function Center() {
    return (
        <div className="flex flex-col py-2 px-11 gap-10">
      {/* Заголовок страницы */}
      <h2 className="text-4xl font-semibold inter text-black">Notification Center</h2>

      <div className="flex flex-col gap-6">

        {/* Непрочитанные уведомления */}
        <div className="flex flex-col gap-2">
          <p className="inter font-bold text-xs text-gray-400">UNREAD</p>
          <div className="flex flex-col gap-1">
            {/* Уведомление 1 */}
            <div className="w-full flex flex-row items-center bg-blue-50 rounded-lg px-4 py-2 gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405a2.032 2.032 0 00-1.315-.595l-2.23-.272a7.5 7.5 0 10-6.482 0l-2.23.272a2.032 2.032 0 00-1.315.595L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <div className="flex flex-col w-full">
                <h1 className="font-semibold inter">New comment on your post</h1>
                <p className="text-sm text-gray-400">5 minutes ago</p>
              </div>
            </div>
            {/* Уведомление 2 */}
            <div className="w-full flex flex-row items-center bg-blue-50 rounded-lg px-4 py-2 gap-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5" 
                stroke="currentColor"
                className="w-8 h-8 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857m-9.288 0A3 3 0 003 18v2h5m7-12V4a3 3 0 00-6 0v4m6 4h6m-6 0v4m0 0H6m6 0v4"
                />
              </svg>
              <div className="flex flex-col w-full">
                <h1 className="font-semibold inter">Friend request received</h1>
                <p className="text-sm text-gray-400">12 minutes ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Прочитанные уведомления */}
        <div className="flex flex-col gap-2">
          <p className="inter font-bold text-xs text-gray-400">READ</p>
          <div className="flex flex-col gap-1">
            {/* Уведомление 3 */}
            <div className="w-full flex flex-row items-center bg-gray-100 rounded-lg px-4 py-2 gap-4">
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
                  d="M12 8v4m0 4h.01"
                />
              </svg>
              <div className="flex flex-col w-full">
                <h1 className="font-semibold inter">Password changed successfully</h1>
                <p className="text-sm text-gray-400">Yesterday, 3:45 PM</p>
              </div>
            </div>
            {/* Уведомление 4 */}
            <div className="w-full flex flex-row items-center bg-gray-100 rounded-lg px-4 py-2 gap-4">
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
                  d="M15 10l4.553 2.276a1 1 0 010 1.448L15 16M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
              <div className="flex flex-col w-full">
                <h1 className="font-semibold inter">New login from Chrome</h1>
                <p className="text-sm text-gray-400">Yesterday, 1:20 PM</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    );
}