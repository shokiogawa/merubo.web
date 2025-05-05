import { ChangeEvent, useState } from "react";

export const useLoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const handlerEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const [password, setPassword] = useState<string>("");
  const handlerPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return { email, handlerEmail, password, handlerPassword };
};
