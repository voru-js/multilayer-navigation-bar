'use client';
import { useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import General from "./sections/general";
import Security from "./sections/security";
import Notifications from "./sections/notifications";
import Billing from "./sections/billing";
import Subscriptions from "./sections/subscriptions";
import Dashboard from "./sections/dashboard";
import Center from "./sections/center";
import Income from "./sections/income";
import Addresses from "./sections/addresses";
import Delivery from "./sections/delivery";
import Documents from "./sections/documents";
import Identification from "./sections/identification";

export default function NavigationBar() {
  const [section, setSection] = useState("account");
const [openSection, setOpenSection] = useState<number | null>(null);
const toggleSection = (sectionId: number) => {
  if (openSection === sectionId) {
    setOpenSection(null);
  } else {
    setOpenSection(sectionId);
  }
}
  const renderContent = () => {
    switch (section) {
      case "account":
        return <General />;
      case "security":
        return <Security />;
      case "notifications":
        return  <Notifications />;
      case "payments":
        return <Billing />;

case "subscription": 
return <Subscriptions />;
    case "dashboard": 
    return <Dashboard />;
    case "center": 
    return <Center />;
    case "income": 
      return <Income />;
    case "addresses": 
      return <Addresses />;
    case "delivery": 
        return <Delivery />;
    case "documents":
      return  <Documents />;
    case "identification": 
    return   <Identification />;
    default:
        return <div><p>Multilayer menu demo</p></div>;
    }
  };

  return (
    <div className="flex h-screen mt-2 py-4">
      {/* Sidebar */}
      
  <div className="w-55   flex flex-col bg-white text-neutral-500  ">
    

  <div className={`flex gap-2 flex-row relative text-md px-4 py-3 hover:bg-blue-100 cursor-pointer inter font-bold transition duration-350 hover:text-blue-500 rounded-br-xl rounded-tr-xl ${openSection === 1 ? "bg-blue-100 text-blue-500" : ""}`} onClick={() => toggleSection(1)}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-11  h-full  ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

    <h1 className="w-full text-left    " >
      Accounts
    </h1>
<span>{openSection === 1 ? (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>
) : ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
)}</span>
</div>
     <AnimatePresence initial={false}>
        {openSection === 1 && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
            transition={{ duration: 0.3 }}
            
          >
       
     
      <div className="px-7 overflow-hidden transition-all duration-300 ease-in-out" 
      
       >
        <button className={`w-full text-left  px-3 py-3   cursor-pointer transition duration-300 ${section === "account" ? "border-blue-500  font-semibold border-l-4 text-blue-500" : "border-gray-300 border-l-2"}`} onClick={() => setSection("account")}>
          General
        </button>
        <button className={`w-full text-left  px-3 py-3   cursor-pointer transition duration-300 ${section === "security" ? "border-blue-500  font-semibold border-l-4 text-blue-500" : "border-gray-300 border-l-2"}`} onClick={() => setSection("security")}>
          Security
        </button>
        <button className={`w-full text-left  px-3 py-3  cursor-pointer transition duration-300 ${section === "notifications" ? "border-blue-500  font-semibold border-l-4 text-blue-500" : "border-gray-300 border-l-2"}`} onClick={() => setSection("notifications")}>
          Notifications
        </button>
      </div>

          </motion.div>
        )}
      </AnimatePresence> 

    
  <div className={`flex gap-2 flex-row relative text-md px-4 py-3 hover:bg-blue-100 cursor-pointer transition duration-350 inter font-bold hover:text-blue-500 rounded-br-xl rounded-tr-xl ${openSection === 2 ? "bg-blue-100 text-blue-500" : ""}`} onClick={() => toggleSection(2)}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-11">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
</svg>


    <h1 className="w-full text-left    " >
      Payments 
    </h1>
<span>{openSection === 2 ? (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>
) : ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
)}</span>
</div>
<AnimatePresence initial={false}>
        {openSection === 2 && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
            transition={{ duration: 0.3 }}
            
          >
  <div className="px-7 ">
        <button className={`w-full text-left  px-3 py-3  cursor-pointer transition duration-300 ${section === "payments" ? "border-blue-500  font-semibold border-l-4 text-blue-500" : "border-gray-300 border-l-2"}`} onClick={() => setSection("payments")}>
          Billing
        </button>
        <button className={`w-full text-left  px-3 py-3  cursor-pointer  transition duration-300 ${section === "subscription" ? "border-blue-500  font-semibold border-l-4 text-blue-500" : "border-gray-300 border-l-2"}`} onClick={() => setSection("subscription")}>
          Subscription
        </button>
        
      </div>
   </motion.div>
        )}
        </AnimatePresence>

<div className={`flex gap-2 flex-row relative text-md px-4 py-3 hover:bg-blue-100 cursor-pointer transition duration-350 inter font-bold hover:text-blue-500 rounded-br-xl rounded-tr-xl ${openSection === 3 ? "bg-blue-100 text-blue-500" : ""}`} onClick={() => toggleSection(3)}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-11">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>



    <h1 className="w-full text-left    " >
      Settings
    </h1>
<span>{openSection === 3 ? (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>
) : ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
)}</span>
</div>
<AnimatePresence initial={false}>
        {openSection === 3 && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
            transition={{ duration: 0.3 }}
            
          >
  <div className="px-7 py-">
        <button className={`w-full text-left  px-3 py-3  cursor-pointer transition duration-300 ${section === "dashboard" ? "border-blue-500  font-semibold border-l-4 text-blue-500" : "border-gray-300 border-l-2"}`} onClick={() => setSection("dashboard")}>
          Dashboard
        </button>
        <button className={`w-full text-left  px-3 py-3  cursor-pointer transition duration-300 ${section === "center" ? "border-blue-500  font-semibold border-l-4 text-blue-500" : "border-gray-300 border-l-2"}`} onClick={() => setSection("center")}>
          Notification center
        </button>
        <button className={`w-full text-left  px-3 py-3  cursor-pointer transition duration-300 ${section === "income" ? "border-blue-500  font-semibold border-l-4 text-blue-500" : "border-gray-300 border-l-2"}`} onClick={() => setSection("income")}>
          Income
        </button>
      </div>
          </motion.div>
        )}
      </AnimatePresence>


<div className={`flex gap-2 flex-row relative text-md px-4 py-3 cursor-pointer hover:bg-blue-100 transition duration-350 inter font-bold hover:text-blue-500 rounded-br-xl rounded-tr-xl ${openSection === 4 ? "bg-blue-100 text-blue-500" : ""}`} onClick={() => toggleSection(4)}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-11">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>




    <h1 className="w-full text-left    " >
      Addresses
    </h1>
<span>{openSection === 4 ? (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>
) : ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
)}</span>
</div>
<AnimatePresence initial={false}>
        {openSection === 4 && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
            transition={{ duration: 0.3 }}
            
          >
  <div className="px-7 ">
        <button className={`w-full text-left  px-3 py-3  cursor-pointer transition duration-300 ${section === "addresses" ? "border-blue-500  font-semibold border-l-4 text-blue-500" : "border-gray-300 border-l-2"}`} onClick={() => setSection("addresses")}>
          Addresses
        </button>
        <button className={`w-full text-left  px-3 py-3  cursor-pointer transition duration-300 ${section === "delivery" ? "border-blue-500  font-semibold border-l-4 text-blue-500" : "border-gray-300 border-l-2"}`} onClick={() => setSection("delivery")}>
          Delivery
        </button>
        
      </div>
          </motion.div>
        )}
      </AnimatePresence>

<div className={`flex gap-2 flex-row relative text-md px-4 py-3 cursor-pointer hover:bg-blue-100  transition duration-350 inter font-bold hover:text-blue-500 rounded-br-xl rounded-tr-xl ${openSection === 5 ? "bg-blue-100 text-blue-500" : ""}`} onClick={() => toggleSection(5)}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-11">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
</svg>




    <h1 className="w-full text-left    " >
      Personal Info
    </h1>
<span>{openSection === 5 ? (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>
) : ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
)}</span>
</div>
<AnimatePresence initial={false}>
        {openSection === 5 && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
            transition={{ duration: 0.3 }}
            
          >
  <div className="px-7 py-">
        <button className={`w-full text-left  px-3 py-3   cursor-pointer transition duration-300 ${section === "documents" ? "border-blue-500  font-semibold border-l-4 text-blue-500" : "border-gray-300 border-l-2"}`} onClick={() => setSection("documents")}>
          Documents
        </button>
        <button className={`w-full text-left  px-3 py-3  cursor-pointer transition duration-300 ${section === "identification" ? "border-blue-500  font-semibold border-l-4 text-blue-500" : "border-gray-300 border-l-2"}`} onClick={() => setSection("identification")}>
        Identification  
        </button>
        
      </div>
   </motion.div>
        )}
        </AnimatePresence>  
</div>

      {/* Content */}
      <div className="flex-1  bg-white text-black">
        {renderContent()}
      </div>
    </div>
  );
}

