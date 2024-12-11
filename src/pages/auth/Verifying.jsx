import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import axios from 'axios';
import { toast } from "sonner"
import { Authen } from '../../redux/slice';
import { LoaderCircle } from 'lucide-react';
import { useDispatch } from 'react-redux';

function Verifying(props) {

    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [loading1, setLoading1] = useState(false)
    const dispatch = useDispatch();

    function authHandler() {
        if (!value) {
            toast.info("Info", { description: 'OTP is required', })
        }
        else {
            setLoading(true)
            axios({
                url: "/api/verify-otp",
                method: "POST",
                data: { email: props.email, otp: value }
            }).then((res) => {
                setLoading(false)
                if (!res.data.createPassword) {
                    dispatch(Authen('login'))
                    toast.success("Success", { description: res.data.message, })
                } else {
                    dispatch(Authen('forget'))
                    toast.success("Success", { description: res.data.message, })
                }

            }).catch(err => {
                setLoading(false)
                if (err.response.data.otpExpired) {
                    toast.info("Info", { description: 'OTP expired, Please request for resent otp.', })
                } else if (err.response.data.message) {
                    toast.info("Info", { description: err.response.data.message, })
                } else {
                    toast.error("Info", { description: 'Internal server Error', })
                }
            })
        }
    }
    const [timer, setTimer] = useState(80); // Timer in seconds (1:20 = 80 seconds)
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000); // Decrease timer every second
            return () => clearInterval(interval); // Cleanup on unmount
        } else {
            setIsDisabled(false); // Enable button when timer reaches 0
        }
    }, [timer]);

    const handleResendOtp = () => {
        setLoading1(true)
        axios({
            url: "/api/resend-otp",
            method: "POST",
            data: { email: props.email }
        }).then((res) => {
            setLoading1(false)
            setIsDisabled(true);
            setTimer(80);
            // console.log(res);
            // if (res.data.otpFor=='forgpt') {
            toast.info('Info', { description: res.data.message })
            // }

        }).catch(err => {
            setLoading1(false)
            toast.info("Info", { description: err.response.data.message, })
        })

    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    return (
        <div className='py-5'>
            <div className="flex justify-center">
                <InputOTP isfocused='true' maxLength={6} value={value} disabled={loading || loading1} onChange={(value) => setValue(value)}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} className="size-12 text-2xl" />
                        <InputOTPSlot index={1} className="size-12 text-2xl" />
                        <InputOTPSlot index={2} className="size-12 text-2xl" />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={3} className="size-12 text-2xl" />
                        <InputOTPSlot index={4} className="size-12 text-2xl" />
                        <InputOTPSlot index={5} className="size-12 text-2xl" />
                    </InputOTPGroup>
                </InputOTP>
            </div>
            <div className="w-full my-2 flex justify-between items-center">
                <Button variant="link" className="font-semibold text-orange-600 px-0" onClick={handleResendOtp} disabled={isDisabled || loading || loading1}>
                    {loading1 && <LoaderCircle className="animate-spin" />}Resend OTP
                </Button>
                <p className='font-semibold text-lg text-gray-700 pr-1'>{(timer != 0) ? formatTime(timer) : '0:00'}</p>
            </div>
            <Button type="submit" className="w-full mt-5"
                onClick={authHandler}
                disabled={loading || loading1}
            >{loading && <LoaderCircle className="animate-spin" />}Continue</Button>
        </div>
    )
}

export default Verifying;