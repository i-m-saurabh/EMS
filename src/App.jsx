import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import {getLocalStorage, setLocalStorage} from './utils/LocalStorage.jsx'
import { AuthContext } from './context/AuthProvider.jsx'


// localStorage.clear();
setLocalStorage();

const App = () => {

    const [user, setUser] = useState(null);
    const [loggedInUserData, setLoggedInUserData] = useState(null);

    const authData = useContext(AuthContext);

    // useEffect(()=>{
    //     const loggedInUser = localStorage.getItem('loggedInUser');
    //     if(loggedInUser){
    //         const userData = JSON.parse(loggedInUser)
    //         setUser(userData.role)
    //         setLoggedInUserData(userData.data)            
    //     }
            
    // }, [])

    const handleLogin = (email, password) => {
        if(email=='admin@example.com' && password=='123'){
            setUser('admin');
            setLoggedInUserData(authData.admin[0]);                                             /*111 */
            localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
        }        
        else if(authData){
            const employee = authData.employees.find((e)=>email == e.email && e.password == password);
            if(employee){
                setUser('employee');
                setLoggedInUserData(employee);
                localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
            }
        }
        else{
            alert('Invalid Credentials');
        }
    }
    

    return(
        <>
            {!user ? <Login handleLogin={handleLogin} /> : ''}
            {/* 111 */}
            {user=='admin' ? <AdminDashboard data={loggedInUserData} /> : (user=='employee' ? <EmployeeDashboard data={loggedInUserData} /> : null)}
        </>
    )
}

export default App
