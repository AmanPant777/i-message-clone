import "./App.css";
import Imessage from "./comp/Imessage";
import { useSelector } from "react-redux";
import { login, selectUser, logout } from "./redux/Slice/userSlice";
import Login from "./comp/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return <div className="App">{user ? <Imessage /> : <Login />}</div>;
}
export default App;
