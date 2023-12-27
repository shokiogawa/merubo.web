import {
  Box,
  Modal,
  ModalDialog,
  Typography,
  DialogTitle,
  Stack,
  Input,
  Button,
  Card,
  Avatar,
} from "@mui/joy";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Great_Vibes } from "next/font/google";
import { useIsExistMessageBordSWR } from "../../../feature/messageBord/hooks/useIsExistMessageBordSWR";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  checkIsCorrectCode,
  fetchMessageBordithMessage,
} from "../../../feature/messageBord/api/api";
import { MessageBordWithMessage } from "../../../types/MessageBordWithMessage";
import useWindowsSize from "../../../hooks/UseWindowsSize";
import Image from "next/image";
import MessageArea from "../../../feature/messageBord/component/MessageArea";

type InputValue = {
  registerCode: string;
};

const GreatVidesFonts = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const MessageBord = () => {
  const router = useRouter();
  const messageBordId = router.query.messageBordId as string;

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [messageBordWithMessage, setMessageBordWithMessage] =
    useState<MessageBordWithMessage>();
  const { width, height } = useWindowsSize();

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
    setMessageBordWithMessage(messageBordData);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputValue>();

  const { isExist, error, isLoading } = useIsExistMessageBordSWR(messageBordId);

  if (isLoading)
    return (
      <Box component="section" sx={{ height: "700px" }}>
        <Typography>データ確認中。。。</Typography>
      </Box>
    );
  if (error)
    return (
      <Box component="section">
        <Typography>エラーが発生しました。</Typography>
      </Box>
    );

  if (!isExist)
    return (
      <Box component="section" sx={{ height: "700px" }}>
        <Typography component="p">寄せ書きが存在しません。</Typography>
      </Box>
    );
  return (
    <Box component="section" sx={{ height: "700px" }}>
      {/* ダイアログ */}

      <Modal open={isExist && messageBordWithMessage ? false : true}>
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
      {/* 寄せ書き閲覧エリア */}
      {messageBordWithMessage && (
        <>
          <Box component="div" sx={{}}>
            {/* 寄せ書きトップ */}
            <Box
              className="top"
              sx={{
                height: height,
                position: "relative",
                backgroundColor: "blue",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  height: { xs: "40%", md: "50%" },
                  width: { xs: "90%", md: "50%" },
                  margin: "auto",
                  backgroundColor: "red",
                  position: "relative",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "white",
                    opacity: 0.6,
                    padding: "10px",
                    position: "absolute",
                    zIndex: 99,
                  }}
                ></Box>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexFlow: "column",
                    justifyContent: "space-around",
                    height: "100%",
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                    position: "absolute",
                    zIndex: 99,
                  }}
                >
                  <Typography
                    component="p"
                    sx={{ display: "block", fontSize: "17px" }}
                  >
                    {messageBordWithMessage.messageBord.receiverUserName}
                  </Typography>
                  <Typography
                    className={GreatVidesFonts.className}
                    component="p"
                    sx={{
                      display: "block",
                      fontSize: "50px",
                      width: "100%",
                      overflowWrap: "break-word",
                      color:
                        messageBordWithMessage.messageBord.mainMessageColor,
                    }}
                  >
                    {messageBordWithMessage.messageBord.mainMessage}
                  </Typography>

                  <Typography
                    component="p"
                    sx={{ display: "block", fontSize: "17px" }}
                  >
                    {messageBordWithMessage.messageBord.title}
                  </Typography>
                </Box>
              </Box>
              <Box
                component="div"
                sx={{ height: "100%", width: "100%", position: "absolute" }}
              >
                <Image
                  src={messageBordWithMessage.messageBord.templateImageUrl}
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>
            {/* メッセージ一覧箇所 */}
            <Box
              component="div"
              sx={{
                backgroundColor: "orange",
                // height: "1000px",
                margin: "10px",
                padding: "0px 0px 10px",
              }}
            >
              <Box
                component="div"
                sx={{
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  height: "80px",
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Message
                </Typography>
              </Box>
              {/* メッセージを入れる場所 */}
              <Box
                component="div"
                sx={{
                  backgroundColor: "white",
                  width: { xs: "95%", md: "60%" },
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  margin: "10px auto 10px",
                }}
              >
                {messageBordWithMessage.messageList.map((message) => (
                  <>
                    <MessageArea message={message} />
                  </>
                ))}
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default MessageBord;
