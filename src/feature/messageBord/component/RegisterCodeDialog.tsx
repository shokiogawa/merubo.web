import {
  Box,
  Modal,
  ModalDialog,
  Typography,
  DialogTitle,
  Stack,
  Input,
  Button,
} from "@mui/joy";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MessageBordWithMessage } from "../../../types/MessageBordWithMessage";
import { checkIsCorrectCode } from "../api/checkIsCorrectCode";
import { fetchMessageBordithMessage } from "../api/fetchMessageBordWithMessage";

type Props = {
  isShowDialog: boolean;
  messageBordId: string;
  handleMessageBordWithMessage: (data: MessageBordWithMessage) => void;
};

type InputValue = {
  registerCode: string;
};

/**
 * 寄せ書きのコード取得ダイアログ
 * @param param
 * @returns
 */
const RegisterCodeDialog: React.FC<Props> = ({
  isShowDialog,
  messageBordId,
  handleMessageBordWithMessage,
}) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputValue>();
  // 入力値が正しい場合
  const isValid: SubmitHandler<InputValue> = async (
    data: InputValue
  ): Promise<void> => {
    const isCorrectCode = await checkIsCorrectCode(
      data.registerCode,
      messageBordId
    );
    // コードが不正な場合は、ユーザーに知らせる。
    if (!isCorrectCode) {
      setErrorMessage("コードが不正です。");
      return;
    }

    //コードが適切の場合、データを入れる
    const messageBordData = await fetchMessageBordithMessage(messageBordId);
    handleMessageBordWithMessage(messageBordData);
  };
  return (
    <Modal open={isShowDialog}>
      <ModalDialog sx={{ height: "170px", width: { xs: "50%", md: "30%" } }}>
        <form onSubmit={handleSubmit(isValid)}>
          <Stack direction="column" alignItems="stretch" spacing={2}>
            <Box paddingBottom="20px">
              <DialogTitle sx={{ fontSize: "12px", paddingBottom: "10px" }}>
                寄せ書きコードを入力してください
              </DialogTitle>
              <Input
                {...register("registerCode", {
                  required: "コードを入力してください。",
                  minLength: { value: 16, message: "コードが不正です。" },
                  maxLength: { value: 16, message: "コードが不正です。" },
                })}
                type="text"
                sx={{ height: "40px" }}
              />
              {errors.registerCode && (
                <Typography component="p">
                  {errors.registerCode.message}
                </Typography>
              )}
              {errorMessage && <Typography>{errorMessage}</Typography>}
            </Box>
            <Button sx={{ height: "32px", fontSize: "10px" }} type="submit">
              寄せ書きを取得する
            </Button>
          </Stack>
        </form>
      </ModalDialog>
    </Modal>
  );
};

export default RegisterCodeDialog;
