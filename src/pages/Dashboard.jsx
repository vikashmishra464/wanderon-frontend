import React from 'react';
import { motion } from 'framer-motion';
import { LogOut, User, Mail, ShieldCheck, Clock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    if (!user) return null;

    return (
        <div className="flex-1 flex flex-col items-center p-6 lg-p-12">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-4xl"
            >
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-3xl font-bold">Dashboard</h1>
                        <p className="text-text-muted mt-1">Welcome back, {user.username}</p>
                    </div>
                    <button 
                        onClick={handleLogout}
                        className="btn-secondary flex items-center gap-2 px-4 py-2 rounded-xl transition-colors text-sm font-semibold"
                    >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                    </button>
                </header>

                <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-6">
                    <div className="glass p-6 flex flex-col items-center">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                            <User className="text-primary w-6 h-6" />
                        </div>
                        <h3 className="text-text-muted text-sm font-medium">Username</h3>
                        <p className="text-xl font-bold mt-1">{user.username}</p>
                    </div>

                    <div className="glass p-6 flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                            <Mail className="text-green-500 w-6 h-6" />
                        </div>
                        <h3 className="text-text-muted text-sm font-medium">Email</h3>
                        <p className="text-lg font-bold mt-1">{user.email}</p>
                    </div>

                    <div className="glass p-6 flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                            <ShieldCheck className="text-blue-500 w-6 h-6" />
                        </div>
                        <h3 className="text-text-muted text-sm font-medium">Status</h3>
                        <p className="text-xl font-bold mt-1">Verified</p>
                    </div>
                </div>

                <div className="mt-12 glass p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Clock className="text-primary w-6 h-6" />
                        <h2 className="text-xl font-bold">Recent Activity</h2>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="activity-item flex items-center justify-between p-4 rounded-xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <ShieldCheck className="text-primary w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Secure Session Established</p>
                                        <p className="text-xs text-text-muted">Successfully authenticated via JWT</p>
                                    </div>
                                </div>
                                <span className="text-xs text-text-muted">Just now</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Dashboard;
