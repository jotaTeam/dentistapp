import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../auth/authContext';
import { useForm } from '../../hooks/useForm';
import { pass } from '../../datahelpers/pass';
import { types } from '../../datahelpers/types';

export const Login = () => {

    const { user, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const lastPath = localStorage.getItem('lastPath') || '/';


    const [newUser, handleInputChange] = useForm({ name: '', pass: '' });



    const handleLogin = (e) => {

        e.preventDefault();

        const action = {
            payload: newUser,
            type: types.login
        };

        dispatch(action);

        navigate(lastPath, {
            replace: true
        });


    };

    const handleLogout = (e) => {

        e.preventDefault();

        const action = {
            
            type: types.logout
        };

        dispatch(action);

        navigate(lastPath, {
            replace: true
        });


    };




    return (
        <>
            <h1>Login </h1>

            <h4>User: {user.logged ? `${user.name} (${user.pass})` : 'no está logeado'}</h4>
            <hr />

            {
                !user.logged
                    ? <form onSubmit={handleLogin}>

                        <table>

                            <tbody>

                                <tr>
                                    <td>User:</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="name"
                                            values={newUser.name}
                                            onChange={handleInputChange}

                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Rol:</td>
                                    <td>
                                        <input
                                            type="radio"
                                            name="pass"
                                            value={pass.admin}
                                            onChange={handleInputChange}

                                        />Admin
                                        <input
                                            type="radio"
                                            name="pass"
                                            value={pass.patient}
                                            onChange={handleInputChange}

                                        />Paciente
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <button
                                            type="submit"
                                        >Login</button>
                                    </td>
                                </tr>

                            </tbody>


                        </table>

                    </form>
                    :<form onSubmit={handleLogout}>
                        <button
                            type="submit"
                        >Logout</button>
                    </form>
            }





        </>
    );
};
