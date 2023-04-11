
import { useCallback, useState } from "react";
import { useLoginModal } from "../../../hooks/useLoginModal";
import { useRegisterModal } from "../../../hooks/useRegisterModal";
import Input from "../Input";
import Modal from "../Modal";

export default function RegisterModal() {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] =useState("");
    const [username, setUsername] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);
            //TODO: Add register and login 
            registerModal.onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [registerModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} disabled={isLoading} />
            <Input placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} disabled={isLoading} />
            <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} disabled={isLoading} />
            <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} disabled={isLoading} />
        </div>
    )

    return (
        <Modal actionDisabled={isLoading} isOpen={registerModal.isOpen} title="Create an account" actionLabel="Register" onClose={registerModal.onClose} onSubmit={onSubmit} body={bodyContent}/>


    )
}