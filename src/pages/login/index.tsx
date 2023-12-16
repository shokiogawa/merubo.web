import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../lib/firebase";
import { ChangeEvent, useEffect, useState } from "react";
import { Box, ButtonGroup, Stack, Typography } from "@mui/joy";
import { Button, Input } from "@mui/material";

const LoginPage = () => {
  useEffect(() => {});
  const [token, setToken] = useState<string>("なし");

  const [email, setEmail] = useState<string>("");
  const handlerEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const [password, setPassword] = useState<string>("");
  const handlerPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const signIn = async () => {
    const user = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    const currentToken = await firebaseAuth.currentUser?.getIdToken();
    setToken(currentToken ?? "なし");
  };
  return (
    <section>
      <Box sx={{ width: "200px", height: "200px", margin: "0 auto" }}>
        <Stack>
          <Input
            placeholder="email"
            required
            onChange={handlerEmail}
            type="email"
            defaultValue={email}
          />
          <Input
            placeholder="password"
            required
            onChange={handlerPassword}
            type="password"
            defaultValue={password}
          />
          <Button type="submit" onClick={signIn}>
            認証
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          width: "500px",
          border: "1px solid",
          margin: "0 auto",
          overflowWrap: "break-word",
        }}
      >
        <Typography>{token}</Typography>
      </Box>
    </section>
  );
};

export default LoginPage;
