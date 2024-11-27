import {useContext} from "react";
import { RootContext } from "../context/RootContext"

function useRootContext() {
    const {age, setAge, user} = useContext(RootContext);
    return {age, setAge, user}
}

export default useRootContext