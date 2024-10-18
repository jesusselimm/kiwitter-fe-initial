import Twit from "./Twit";
import PageLayout from "./PageLayout";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function MainPage() {
    const { data } = useQuery({
        queryKey : ["mainPageTwits"],
        queryFn: () => 
            axios.get("https://kiwitter-node-77f5acb427c1.herokuapp.com/twits"),
    });

    return (
        <PageLayout>
            {data
            ? data.data.data.map((twit) => <Twit key={twit.id} item={twit} />)
            : "loading"}
        </PageLayout>
    );
}