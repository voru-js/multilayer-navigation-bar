export default function Security() {
    return (
        <div className="flex flex-col py-2 px-11 gap-10 ">
          <h2 className="text-4xl font-semibold inter text-black ">Privacy & Security </h2>
        <div className="flex-col flex gap-2 ">
          <p className="inter font-bold text-xs text-gray-400">UPDATES</p>
          <div className="flex flex-col gap-1">
<div className="w-full h-15 flex flex-row bg-blue-100 rounded-lg px-4 py-2 gap-4">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-8 h-auto text-gray-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>


<div className="flex flex-col w-full h-full " >
  <h1 className="font-semibold inter ">New update available!</h1>
  <p className="text-sm  text-gray-400">version 1.0</p>
</div>
</div>

<div className="w-full h-15 flex flex-row  rounded-lg  py-2 gap-4">
<button className="bg-blue-100 px-4 py-2 inter font-bold text-blue-800 rounded-lg">Update!</button>
<button className="bg-orange-100/70 px-4 py-2 inter font-bold  rounded-lg">Cancel</button>
</div>
          </div>
        </div>
        <div className="flex-col flex gap-2 ">
          <p className="inter font-bold text-xs text-gray-400">PRIVACE</p>
          <div className="flex flex-col gap-1">
<div className="w-full h-15 flex flex-row bg-orange-100/70 rounded-lg px-4 py-2 gap-4">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 h-auto w-8 text-gray-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
<div className="flex flex-col w-full h-full " >
  <h1 className="font-semibold inter ">Password & Security</h1>
  <p className="text-sm  text-gray-400">Your password is outdated. Please update</p>
</div>
</div>
<div className="w-full h-15 flex flex-row bg-gray-100 rounded-lg px-4 py-2 gap-4">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 h-auto w-8 text-gray-600 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
</svg>

<div className="flex flex-col w-full h-full " >
  <h1 className="font-semibold inter ">Payment methods</h1>
  <p className="text-sm  text-gray-400">You have not added any payment methods</p>
</div>
</div>
<div className="w-full h-15 flex flex-row bg-gray-100 rounded-lg px-4 py-2 gap-4">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 h-auto w-8 text-gray-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>


<div className="flex flex-col w-full h-full " >
  <h1 className="font-semibold inter ">Delivery address</h1>
  <p className="text-sm  text-gray-400">You have not added any delivery addresses</p>
</div>
</div>
          </div>
        </div>
        </div>
    );
}