import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import Login from './Login';
import Register from './Register';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useDispatch, useSelector } from 'react-redux';
import { AuthDailog } from '../../redux/slice';
import { Authen } from '../../redux/slice';
import Verifying from './Verifying';
import { Toaster } from "@/components/ui/sonner"
import Forget from './Forget';

function Auth() {

    const dispatch = useDispatch();
    const authDailog = useSelector((state) => state.store.authDailog);
    const auth = useSelector((state) => state.store.auth);

    const [email, setEmail] = useState('');

    return (
        <>
            <Dialog defaultOpen={true} open={authDailog}
                onOpenChange={() => {
                    setEmail('');
                    dispatch(AuthDailog(false));
                    dispatch(Authen('login'))
                }}>
                <DialogContent className="sm:max-w-[425px]">
                    {auth == 'login' && <DialogHeader>
                        <DialogTitle>Login</DialogTitle>
                        <DialogDescription>Enter your email below to login to your account</DialogDescription>
                    </DialogHeader>}
                    {auth == 'register' && <DialogHeader>
                        <DialogTitle>Register</DialogTitle>
                        <DialogDescription>Enter the below details to Register</DialogDescription>
                    </DialogHeader>}
                    {auth == 'verifying' && <DialogHeader>
                        <DialogTitle>Verifying</DialogTitle>
                        <DialogDescription>Enter OTP is sented to this email {email}</DialogDescription>
                    </DialogHeader>}
                    {auth == 'forget' && <DialogHeader>
                        <DialogTitle className='mb-3'> Create Password</DialogTitle>
                        {/* <DialogDescription>Enter OTP is sented to this email {email}</DialogDescription> */}
                    </DialogHeader>}
                    {auth == 'login' && <Login email={email} onEmail={setEmail} />}
                    {auth == 'register' && <Register email={email} onEmail={setEmail} />}
                    {auth == 'verifying' && <Verifying email={email} />}
                    {auth == 'forget' && <Forget email={email} />}
                </DialogContent>
            </Dialog>
            <Toaster position="top-right" richColors />
        </>
    )
}

export default Auth;