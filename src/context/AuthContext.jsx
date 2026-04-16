import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    let baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
    
    // Ensure the baseURL ends with /api
    if (baseUrl && !baseUrl.endsWith('/api') && !baseUrl.endsWith('/api/')) {
        baseUrl = baseUrl.replace(/\/$/, '') + '/api';
    }

    axios.defaults.baseURL = baseUrl;
    axios.defaults.withCredentials = true;

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        try {
            const res = await axios.get('/auth/me');
            if (res.data.success) {
                setUser(res.data.user);
            }
        } catch (err) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        const res = await axios.post('/auth/login', { email, password });
        if (res.data.success) {
            setUser(res.data.user);
        }
        return res.data;
    };

    const register = async (username, email, password) => {
        const res = await axios.post('/auth/register', { username, email, password });
        if (res.data.success) {
            setUser(res.data.user);
        }
        return res.data;
    };

    const logout = async () => {
        await axios.get('/auth/logout');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout, checkUser }}>
            {children}
        </AuthContext.Provider>
    );
};
