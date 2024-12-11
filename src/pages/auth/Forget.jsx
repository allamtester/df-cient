import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { toast } from "sonner"
import axios from 'axios';
import { Authen } from '../../redux/slice';
import { useDispatch } from 'react-redux';


function Forget(props) {

    const dispatch = useDispatch();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validationError, setValidationError] = useState('');

    function functionHandler() {
        if (!newPassword) {
            setValidationError('newPassword')
            toast.info("Info", { description: 'New Password is Required' })
        } else if (!confirmPassword) {
            setValidationError('confirmPassword')
            toast.info("Info", { description: 'Confirm Password is Required' })
        } else if (newPassword == confirmPassword) {
            axios({
                url: "/api/create-password",
                method: "POST",
                data: { email: props.email, password: newPassword }
            }).then((res) => {
                dispatch(Authen('login'))
                toast.success("Success", { description: res.data.message, })
            }).catch(err => {
                // setValidate(err.response.data.validate);
                toast.info("Info", { description: err.response.data.message, })
            })
        } else {
            setValidationError('confirmPassword')
            toast.info("Info", { description: 'Confirm Password is not Match', })
        }

    }

    return (
        <>
            <div className="grid gap-5">
                <div className="grid gap-2">
                    <Label htmlFor="password">New password <span className='text-red-500'>*</span></Label>
                    <Input
                        value={newPassword}
                        id="newPassword"
                        type="password"
                        onChange={(e) => setNewPassword(e.target.value)}
                        className={validationError == 'newPassword' ? 'border-red-500' : ''}
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Confirm password <span className='text-red-500'>*</span></Label>
                    <Input
                        value={confirmPassword}
                        id="confirmPassword"
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={validationError == 'confirmPassword' ? 'border-red-500' : ''}
                    />
                </div>
            </div>
            <Button type="submit" className="w-full my-4" onClick={functionHandler}>Submit</Button>
        </>
    )
}

export default Forget;