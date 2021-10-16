import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading,setLoading]=useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInUsingGoogle = () => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(()=>{
                setLoading(false)
            })
    }
    //observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false)
        });
        return ()=> unsubscribed;
    }, [])
    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        .finally(()=>{
            setLoading(false)
        });
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;