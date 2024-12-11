import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Authen } from '../../redux/slice';
import { LoaderCircle } from 'lucide-react';
import { toast } from "sonner"


function Register(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [validationError, setValidationError] = useState('');
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();
    // const { toast } = useToast()
    useEffect(() => {
        props.email && setEmail(props.email)
    }, [props.email])

    function authHandler() {
        if (!firstName) {
            setValidationError('firstName');
            toast.info("Info", { description: 'First Name is Required' })
        } else if (!email) {
            setValidationError('email');
            toast.info("Info", { description: 'Email Id is Required', })
        } else if (!password) {
            setValidationError('password');
            toast.info("Info", { description: 'Password is Required', })
        } else {
            setLoading(true)
            axios({
                url: "/api/register",
                method: "POST",
                data: { firstName: firstName, lastName: lastName, email: email, password: password }
            }).then((res) => {
                setLoading(false)
                props.onEmail(email);
                console.log(res);
                toast.info("Info", { description: res.data.message+", Please login" })
                dispatch(Authen('login'))
            }).catch((err) => {
                setLoading(false)
                if (err.response?.data?.EmailAlreadyExists) {
                    props.onEmail(email);
                    dispatch(Authen('login'))
                    toast.error("Info", { description: err.response.data.message+", Please login"})
                } else if (err.response?.data?.validationError == 'email') {
                    setValidationError('email');
                    toast.error("Info", { description: err.response.data.message })
                } else {
                    toast.error("Info", { description: "Internal Server Error" })
                }
            })
        }
    }

    return (
        <>
            <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-2">
                    <div className='gap-2'>
                        <Label htmlFor="firstName">First Name <span className='text-red-500'>*</span></Label>
                        <Input
                            value={firstName}
                            id="firstName"
                            type="text"
                            onChange={(e) => {
                                setFirstName(e.target.value)
                                setValidationError('');
                            }}
                            disabled={loading}
                            className={validationError == 'firstName' ? 'border-red-500' : ''}
                        />
                    </div>
                    <div className='gap-2'>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                            value={lastName}
                            id="lastName"
                            type="text"
                            disabled={loading}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email <span className='text-red-500'>*</span></Label>
                    <Input
                        value={email}
                        id="email"
                        type="email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setValidationError('');
                        }}
                        disabled={loading}
                        className={validationError == 'email' ? 'border-red-500' : ''}
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password <span className='text-red-500'>*</span></Label>
                    <Input
                        value={password}
                        id="password"
                        type="password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setValidationError('');
                        }}
                        disabled={loading}
                        className={validationError == 'password' ? 'border-red-500' : ''}
                    />
                </div>
                <Button type="submit" className="w-full"
                    onClick={authHandler}
                    disabled={loading}
                >
                    {loading && <LoaderCircle className="animate-spin" />}Register
                </Button>
            </div>
            <div className="mt-3 text-center text-sm">
                Already have an account?{" "}
                <Button variant="link" className="p-0"
                    onClick={() => {
                        props.onEmail('')
                        dispatch(Authen('login'))
                    }}
                    disabled={loading}
                >
                    Login
                </Button>
            </div>

        </>
    )
}

export default Register;