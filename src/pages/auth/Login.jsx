import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Authen } from '../../redux/slice';
import { toast } from "sonner"
import { AuthDailog } from '../../redux/slice';
import { useCookies } from 'react-cookie';
import { LoaderCircle } from 'lucide-react';

function Login(props) {

    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationError, setValidationError] = useState('');
    const [loading, setLoading] = useState(false)
    const [loading1, setLoading1] = useState(false)

    useEffect(() => {
        props.email && setEmail(props.email)
    }, [props.email])

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.store.auth);

    function authHandler() {
        if (!email) {
            setValidationError('email')
            toast.info("Info", { description: 'Email Id is Required', })
        } else if (!password) {
            setValidationError('password')
            toast.info("Info", { description: 'Email Id is Required', })
        } else {
            setLoading(true)
            axios({
                url: "/api/login",
                method: "POST",
                data: { email: email, password: password }
            }).then((res) => {
                setLoading(false)
                if (res.data.token) {
                    toast.success("Success", { description: res.data.message, })
                    dispatch(AuthDailog(false))
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
                    setCookie('token', res.data.token)
                }
            }).catch(err => {
                setLoading(false)
                setValidationError('');
                if (err.response?.data?.userNotFound) {
                    props.onEmail(email);
                    toast.info("Info", { description: err.response?.data?.message + ", Please Register" })
                    dispatch(Authen('register'))
                } else if (err.response?.data?.InValidPassword) {
                    setValidationError('password')
                    toast.info("Info", { description: err.response?.data?.message, })
                } else if (err.response?.data?.validationError == 'email') {
                    setValidationError('email')
                    toast.info("Info", { description: err.response?.data?.message, })
                } else {
                    toast.error("Error", { description: 'Internal Server Error' })
                }
            })
        }
    }

    const forgotPassword = () => {
        if (!email) {
            setValidationError('email');
            toast.info("Info", { description: 'Email Id is Required', })
        } else {
            setLoading1(true)
            axios({
                url: "/api/forgot-password",
                method: "POST",
                data: { email: email }
            }).then((res) => {
                setLoading(false)
                props.onEmail(email)
                toast.info("Info", { description: res.data.message })
                dispatch(Authen('verifying'))
            }).catch(err => {
                setLoading1(false)
                if (err.response?.data?.userNotFound) {
                    setValidationError('email')
                    toast.info("Info", { description: err.response?.data?.message, })
                } else if (!err.response?.data?.userVerified) {
                    // dispatch(Authen('verifying'))
                    toast.error("Info", { description: err.response?.data?.message, })
                } else if (err.response?.data?.message) {
                    setValidationError('email')
                    toast.info("Info", { description: err.response?.data?.message, })
                } else {
                    toast.error("Error", { description: 'Internal Server Error', })
                }
            })
        }
    };
    return (
        <>
            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email <span className='text-red-500'>*</span></Label>
                    <Input
                        value={email}
                        id="email"
                        type="email"
                        className={validationError == 'email' ? 'border-red-500' : ''}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setValidationError('')
                        }}
                        disabled={loading || loading1}
                    />
                </div>
                <div className="grid gap-2 ">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password <span className='text-red-500'>*</span></Label>
                        <Button variant="link" className="text-sm h-0 p-0" disabled={loading} onClick={forgotPassword}>
                            {loading1 && <LoaderCircle className="animate-spin" />}Forgot your password?
                        </Button>
                    </div>
                    <Input
                        value={password}
                        id="password"
                        type="password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setValidationError('')
                        }}
                        disabled={loading || loading1}
                        className={validationError == 'password' ? 'border-red-500' : ''}
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full"
                    onClick={authHandler}
                    disabled={loading || loading1}
                >
                    {loading && <LoaderCircle className="animate-spin" />}Login
                </Button>
                <Button
                    variant="outline"
                    className="w-full"
                    disabled={loading || loading1}
                >
                    Login with Google
                </Button>
            </div>
            <div className="mt-3 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Button variant="link" className="p-0"
                    onClick={() => {
                        props.onEmail('')
                        dispatch(Authen('register'))
                    }}
                    disabled={loading || loading1}
                >Register</Button>
            </div>
        </>
    )
}

export default Login;