import { Box, Button, Input, Stack, Typography } from "@mui/material";
import NormalInput from "../../components/Input/Normalinput";

type Props = {
  email?: string;
  password?: string;
  token?: string;
  handlerEmail?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlerPassword?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  signIn: () => Promise<void>;
};

export const LoginPresentation: React.FC<Props> = ({
  email,
  password,
  token,
  handlerEmail,
  handlerPassword,
  signIn,
}) => {
  return (
    <section>
      <Box
        sx={{
          width: "400px",
          height: "calc(100vh - 215px)",
          margin: "0 auto",
        }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ height: "100%", textAlign: "center" }}
        >
          <Typography>ログイン画面</Typography>
          <NormalInput
            placeholder="メールアドレス"
            required
            onChange={handlerEmail}
            type="email"
            defaultValue={email}
          />
          <NormalInput
            placeholder="パスワード"
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
        {token && <Typography>{token}</Typography>}
      </Box>
    </section>
  );
};
