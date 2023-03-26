import { useState } from 'react';
import * as ls from 'local-storage'



function useToken() {

    function getToken() {
        const userToken = ls.get<string | null>('token');
        return userToken && userToken
    }

    const [token, setToken] = useState(getToken());

    function saveToken(userToken: string) {
        ls.set<string | null>('token', userToken);
        setToken(userToken);
    };

    function removeToken() {
        ls.remove("token");
        setToken(null);
    }

    return {
        setToken: saveToken,
        token,
        removeToken
    }

}

export default useToken;