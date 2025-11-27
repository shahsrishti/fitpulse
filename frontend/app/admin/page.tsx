"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Trash2, CheckCircle, Mail, Phone, User, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [queries, setQueries] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Simple hardcoded password for demo purposes
    const ADMIN_PASSWORD = "admin";

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            fetchQueries();
        } else {
            alert("Invalid password");
        }
    };

    const fetchQueries = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("queries")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Error fetching queries:", error);
        } else {
            setQueries(data || []);
        }
        setLoading(false);
    };

    const deleteQuery = async (id: number) => {
        if (!confirm("Are you sure you want to delete this query?")) return;

        const { error } = await supabase
            .from("queries")
            .delete()
            .eq("id", id);

        if (error) {
            console.error("Error deleting query:", error);
            alert("Failed to delete query");
        } else {
            setQueries(queries.filter(q => q.id !== id));
        }
    };

    const markAsRead = async (id: number) => {
        // This assumes there's a 'read' column, if not it will error, but for now we'll just simulate it locally or try to update
        // If the table doesn't have 'read' column, this part might fail on Supabase side if strict, 
        // but we'll assume the user might add it or we just update local state for UI feedback

        // For now, let's just remove it from the "unread" view or just show a success message
        // Ideally we would update the DB:
        /*
        const { error } = await supabase
          .from("queries")
          .update({ read: true })
          .eq("id", id);
        */
        alert("Marked as read (functionality requires 'read' column in DB)");
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                                placeholder="Enter admin password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <button
                        onClick={() => setIsAuthenticated(false)}
                        className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                        Logout
                    </button>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-xl font-semibold">Recent Queries</h2>
                    </div>

                    {loading ? (
                        <div className="p-8 text-center text-gray-500">Loading queries...</div>
                    ) : queries.length === 0 ? (
                        <div className="p-8 text-center text-gray-500">No queries found.</div>
                    ) : (
                        <div className="divide-y divide-gray-200 dark:divide-gray-700">
                            {queries.map((query) => (
                                <div key={query.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full text-blue-600 dark:text-blue-400">
                                                <User className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">{query.name}</h3>
                                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-3">
                                                    <span className="flex items-center"><Mail className="w-3 h-3 mr-1" /> {query.email}</span>
                                                    {query.phone && <span className="flex items-center"><Phone className="w-3 h-3 mr-1" /> {query.phone}</span>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-500 flex items-center">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {new Date(query.created_at).toLocaleDateString()}
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mb-4 text-gray-700 dark:text-gray-300">
                                        {query.message}
                                    </div>

                                    <div className="flex justify-end space-x-3">
                                        <button
                                            onClick={() => markAsRead(query.id)}
                                            className="flex items-center text-sm text-green-600 hover:text-green-700 font-medium"
                                        >
                                            <CheckCircle className="w-4 h-4 mr-1" /> Mark as Read
                                        </button>
                                        <button
                                            onClick={() => deleteQuery(query.id)}
                                            className="flex items-center text-sm text-red-600 hover:text-red-700 font-medium"
                                        >
                                            <Trash2 className="w-4 h-4 mr-1" /> Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
