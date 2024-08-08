import { useQuery } from "react-query";
import { getData } from "../utils/api/api";


export const useGetData = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: getData,
        onSuccess: (data) => {
            console.log(data);
            return data;
        },
        onError: (error) => {
            console.error(error);
        }
    });
};
