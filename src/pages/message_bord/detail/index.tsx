import { Box, Typography } from "@mui/joy";
import { useRouter } from "next/router";
import { useState } from "react";
import { useIsExistMessageBordSWR } from "../../../feature/messageBord/hooks/useIsExistMessageBordSWR";
import { MessageBordWithMessage } from "../../../types/MessageBordWithMessage";
import useWindowsSize from "../../../hooks/UseWindowsSize";
import Image from "next/image";
import MessageArea from "../../../feature/messageBord/component/MessageArea";
import RegisterCodeDialog from "../../../feature/messageBord/component/RegisterCodeDialog";
import { GreatVidesFonts } from "../../../utility/fonts";
import { NextPage } from "next";
import { getColor } from "../../../utility/getColor";

/**
 * 寄せ書きを確認する画面
 * @returns
 */
const MessageBord: NextPage = () => {
  const router = useRouter();
  const messageBordId = router.query.messageBordId as string;

  const [messageBordWithMessage, setMessageBordWithMessage] =
    useState<MessageBordWithMessage>();

  const handleMessageBordWithMessage = (data: MessageBordWithMessage) => {
    setMessageBordWithMessage(data);
  };
  const { width, height } = useWindowsSize();

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
      <RegisterCodeDialog
        isShowDialog={isExist && messageBordWithMessage ? false : true}
        messageBordId={messageBordId}
        handleMessageBordWithMessage={handleMessageBordWithMessage}
      />
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
                display: "flex",
              }}
            >
              <Box
                sx={{
                  height: { xs: "40%", md: "50%" },
                  width: { xs: "90%", md: "50%" },
                  margin: "auto",
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
                  <p
                    className={GreatVidesFonts.className}
                    style={{
                      display: "block",
                      fontSize: "50px",
                      width: "100%",
                      overflowWrap: "break-word",
                      color: getColor(
                        messageBordWithMessage.messageBord.mainMessageColor
                      ),
                    }}
                  >
                    {messageBordWithMessage.messageBord.mainMessage}
                  </p>
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
              {/* メッセージ一覧箇所 */}
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
                <Box component="ul">
                  {messageBordWithMessage.messageList.map((message) => (
                    <Box component="li" key={message.id}>
                      <MessageArea message={message} />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default MessageBord;
