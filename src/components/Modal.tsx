import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    actionDisabled?: boolean;
}

export default function Modal({ isOpen, onClose, onSubmit, title, body, footer, actionLabel, actionDisabled }: ModalProps) {

    const handleClose = useCallback(() => {
        if (actionDisabled) {
            return;
        }
        onClose();
    }, [actionDisabled, onClose])

    const handleSubmit = useCallback(() => {
        if (actionDisabled) {
            return;
        }
        onSubmit();
    }, [actionDisabled, onSubmit])

    if (!isOpen) {
        return null;
    } else {
        return (
            <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70">
                <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl  h-full lg:h-auto">
                {/* Content */}
                    <div className="h-full lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                        {/* Header */}
                        <div className="flex items-center justify-between p-10 rounded-t">
                            <h3 className="text-3xl font-semibold text-white">
                                {title}
                            </h3>
                            <button onClick={handleClose} type="button" title="btn" className="p1 ml-auto border-0 text-white hover:opcaity-70 transition">
                                <AiOutlineClose size={20}/>
                            </button>
                        </div>
                        {/* body */}
                        <div className="relative p-10 flex-auto">
                            {body}
                        </div>
                        <div className="flex flex-col gap-2 p-10">
                            <Button disabled={actionDisabled} label={actionLabel} secondary fullWidth large onClick={handleSubmit}/>
                            {/* Footer */}
                            {footer}
                        </div>
                      
                        
                    </div>
                {/* End of Content */}
                </div>
            </div>
            </>
        )
    }

}