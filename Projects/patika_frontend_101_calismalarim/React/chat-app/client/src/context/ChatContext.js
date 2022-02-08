import { createContext, useState, useContext } from "react"

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    //Children yazmayı dene, otomatik mi geliyor?

    const [messages, setMessages] = useState([]);

    const values = {
        messages,
        setMessages,
    };

    return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
};

export const useChat = () => useContext(ChatContext);