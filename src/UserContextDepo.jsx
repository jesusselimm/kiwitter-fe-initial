import { createContext, useState } from "react";
import { isPast } from "date-fns";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext();

export const UserContexDepo = ({ children }) => {
    const token = localStorage.getItem("kiwitter-user");

    let initialUser = null;

    if (token) {
      const decodedUser = jwtDecode(token);
      const gecmisMi = isPast(new Date(decodedUser.exp * 1000));

      if (gecmisMi) {
        localStorage.removeItem("kiwitter-user");
      } else {
        initialUser = decodedUser;
      }
    }

    const [user, setUser] = useState(initialUser);

    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
      );
};