import { Eye, EyeOff, LucideIcon } from "lucide-react";
import { useState } from "react";

export type inputCom = {
    lucideOne: LucideIcon
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function InputPassword(props: inputCom) {
    const IconOne = props.lucideOne
    const [password, setPassword] = useState(false)

    return (
        <div className="w-full flex sm:justify-center items-center">
            <div className="flex items-center w-full sm:w-sm border rounded-xl bg-bf-input">
                <div className=" p-2 ">
                    <IconOne size={20} />
                </div>
                <input className="w-full sm:w-sm rounded-xl bg-bg-input py-3 px-10" type={password ? 'text' : 'password'} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
                <div onClick={() => setPassword(e => !e)} className=" p-2 ml-57 xs:ml-72 2xs:ml-83">
                    {password ? <EyeOff /> : <Eye />}
                </div>
            </div>
        </div>
    )
}