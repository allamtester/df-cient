import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold tracking-tight">404</h1>
                <p className="text-2xl mt-4">Page Not Found</p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Sorry, the page you are looking for doesn't exist.
                </p>
                <div className="mt-6">
                    <Button onClick={() => navigate("/")} className="px-6 py-3">
                        Go to Home
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
