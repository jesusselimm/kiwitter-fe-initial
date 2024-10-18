import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "./PageLayout";
import axios from "axios";
import Twit from "./Twit";

export default function UserTwits() {
    let { nickname } = useParams();

    const [userTw, setUserTw] = useState([]);

    useEffect(() => {
        axios
      .get(
        `https://kiwitter-node-77f5acb427c1.herokuapp.com/users/${nickname}/twits`
      )
      .then((response) => setUserTw(response.data.data))
      .catch((error) => console.log("bir hata oluştu", error));
  }, [nickname]);

  return (
    <PageLayout>
      {userTw.map((twit) => (
        <Twit key={twit.id} item={twit} />
      ))}
    </PageLayout>
  );
}