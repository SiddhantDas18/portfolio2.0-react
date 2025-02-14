import React from 'react';
import { Mail } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-sm md:max-w-md text-center">
                <h2 className="text-2xl font-bold text-gray-800">Contact Me</h2>
                <p className="text-gray-600 mt-2">Feel free to reach out anytime!</p>

                <div className="mt-6">
                    {/* Email */}
                    <a href="mailto:siddhant.physics@gmail.com" className="flex items-center justify-center gap-3 text-gray-700 hover:text-blue-500 transition">
                        <Mail className="w-5 h-5 text-blue-500" />
                        <span className="truncate">siddhant.physics@gmail.com</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
