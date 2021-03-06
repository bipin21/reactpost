
import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';


// Authentication
const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice(
    {
        name: 'authentication',
        initialState: initialAuthState,
        reducers: {
            login(state, action) {
                const userCred = action.payload;
                axios.post('http://localhost:8080/authenticate', userCred)
                    .then(response => {
                        Cookies.set('user', response.data.jwt)
                        axios.defaults.headers.common = {
                            'Authorization': 'Bearer ' + response.data.jwt
                        };

                        

                        axios.get(`/users/finduser/${userCred.username}`)
                            .then(
                                response => {
                                    console.log(response.data.name)
                                    Cookies.set('username', response.data.name)
                                }
                            )
                            .catch(err => console.log(err))




                    })
                    .catch(err => console.log(err.message))

                if (Cookies.get('user') != null) {
                    state.isAuthenticated = true

                }


            },
            logout(state) {
                Cookies.remove('user')
                Cookies.remove('username')
                axios.defaults.headers.common = {
                    'Authorization': ''
                };
                state.isAuthenticated = false;
            },

        }

    }
);

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
});

export const authActions = authSlice.actions;

export default store;
