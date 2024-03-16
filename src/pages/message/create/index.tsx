import { NextPage } from "next";
import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import { v4 } from "uuid";
import { useRouter } from "next/router";
import { Button } from "@material-ui/core/";
import { useForm } from "react-hook-form";
import { uploadImage } from "../../../api/uploadImage";
import { Message } from "../../../types/Message";
import createMessage from "../../../feature/message/api/createMessage";
import { useMessageBordSWR } from "../../../feature/messageBord/hooks/useMessageBordSWR";
import { Box, InputLabel, TextField, Typography } from "@mui/material";
import MessageThumbnailUpload from "../../../feature/message/component/MessageThumbnailUpload";
import UploadImage from "../../../components/UploadImage";
import MeruboDialog from "../../../components/MeruboDialog";
type InputData = {
  userName: string;
  content: string;
};
const CreateMessage: NextPage = () => {
  const router = useRouter();
  const messageBordId = router.query.messageBordId as string;
  // フォーム
  const {
    register,
    getValues,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<InputData>();
  const [uploadFile, setUploadFile] = useState<File>();
  const [avaterFile, setAvaterFile] = useState<File>();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // 画像取得メソッド
  const handleSetUploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    if (files == null) {
      return;
    }
    const file = files[0];
    if (file === null) {
      return;
    }
    setUploadFile(file);
  };

  //サムネ画像取得メソッド
  const handleSetThumbnailImage = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, files } = event.target;
    if (files == null) {
      return;
    }
    const file = files[0];
    if (file === null) {
      return;
    }
    setAvaterFile(file);
  };
  // メッセージ追加ボタン押下時
  const onSubmit = async (): Promise<void> => {
    const messageId = v4();
    let thumbnail;
    let image;
    if (avaterFile) {
      const filePath = `message_bords/${messageBordId}/messages/${messageId}/thumbnail/${avaterFile.name}`;
      thumbnail = await uploadImage(avaterFile, filePath, true);
    }
    if (uploadFile) {
      const filePath = `message_bords/${messageBordId}/messages/${messageId}/image/${uploadFile.name}`;
      image = await uploadImage(uploadFile, filePath, true);
    }
    const currentDate = new Date();
    const message: Message = {
      id: messageId,
      userName: getValues("userName"),
      content: getValues("content"),
      thumbnail: thumbnail,
      image: image,
      orderNumber: 0,
      createdAt: currentDate,
      updatedAt: currentDate,
    };
    await createMessage(messageBordId, message);
  };

  const { messageBordData, error, isLoading } =
    useMessageBordSWR(messageBordId);
  if (error) return <div>エラーが発生しました</div>;
  if (isLoading)
    return (
      <Box sx={{ height: "700px", textAlign: "center", paddingTop: "100px" }}>
        データ取得中です。
      </Box>
    );
  if (!messageBordData)
    return (
      <Box sx={{ height: "700px", textAlign: "center", paddingTop: "100px" }}>
        該当データが存在しません。
      </Box>
    );
  return (
    <>
      {messageBordData.status === "edit" ? (
        <section className="merubo-section">
          {/* タイトルエリア */}
          <Typography
            component="h2"
            sx={{
              padding: "20px 5px",
              textAlign: "center",
              fontSize: "22px",
              fontWeight: "bold",
            }}
            className="title"
          >
            {messageBordData?.receiverUserName}
            さんへ{messageBordData.category}のお祝いを送りましょう
          </Typography>

          {/* メッセージエリア */}
          <Box component="div" sx={{ backgroundColor: "white" }}>
            {/* メッセージタイトルエリア */}
            <Box
              className="merubo-title"
              sx={{
                backgroundColor: "",
                padding: "10px",
                borderBottom: 2,
                borderBottomColor: "#e7eaec",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  borderLeft: 5,
                  borderLeftColor: "orange",
                  paddingLeft: "10px",
                  marginTop: "5px",
                  fontWeight: "bold",
                }}
                component="p"
              >
                メッセージを追加
              </Typography>
            </Box>
            {/* メッセージ入力エリア */}
            <Box
              component="div"
              sx={{ backgroundColor: "", padding: "10px 20px" }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="merubo-form">
                <ul className="items">
                  {/* あなたの写真 */}
                  <Box component="li" sx={{ paddingBottom: "30px" }}>
                    <InputLabel sx={{ paddingBottom: "5px", fontSize: "15px" }}>
                      あなたの写真 (任意)
                    </InputLabel>
                    <MessageThumbnailUpload
                      id={"avater"}
                      onChange={handleSetThumbnailImage}
                    />
                  </Box>
                  {/* あなたの名前 */}
                  <Box component="li" sx={{ paddingBottom: "30px" }}>
                    <InputLabel
                      required={true}
                      sx={{ paddingBottom: "5px", fontSize: "15px" }}
                    >
                      お名前
                    </InputLabel>
                    <TextField
                      id="userName"
                      required={true}
                      variant="outlined"
                      inputProps={{ style: { fontSize: 15 } }}
                      sx={{
                        width: "100%",
                      }}
                      type="text"
                      placeholder="あなたのお名前を入力してください。"
                      {...register("userName", { required: true })}
                    ></TextField>
                    {errors.userName && (
                      <Typography
                        fontSize="12px"
                        component="span"
                        sx={{ color: "red" }}
                      >
                        あなたの名前を入力してください。
                      </Typography>
                    )}
                  </Box>

                  {/* メッセージ */}
                  <Box component="li" sx={{ paddingBottom: "30px" }}>
                    <InputLabel
                      required={true}
                      sx={{ paddingBottom: "5px", fontSize: "15px" }}
                    >
                      メッセージ
                    </InputLabel>
                    <TextField
                      id="content"
                      required={true}
                      multiline
                      rows={20}
                      maxRows={Infinity}
                      variant="outlined"
                      inputProps={{
                        style: { fontSize: 15, lineHeight: "22px" },
                      }}
                      sx={{ width: "100%" }}
                      placeholder="メッセージを入力してください。"
                      {...register("content", { required: true })}
                    ></TextField>
                    {errors.userName && (
                      <Typography
                        component="span"
                        fontSize="12px"
                        sx={{ color: "red" }}
                      >
                        メッセージを入力してください。
                      </Typography>
                    )}
                  </Box>

                  {/* 写真アップロード */}
                  <Box component="li" sx={{ paddingBottom: "30px" }}>
                    <InputLabel sx={{ paddingBottom: "5px", fontSize: "15px" }}>
                      思い出の写真 (任意)
                    </InputLabel>
                    <UploadImage
                      id="image"
                      wrapName="思い出の写真をアップロード"
                      onChange={handleSetUploadImage}
                    />
                  </Box>

                  {/* ボタン */}
                  <Box sx={{ width: "100%" }}>
                    <Button
                      style={{
                        width: "100%",
                        backgroundColor: "orange",
                        color: "white",
                        padding: "10px 20px",
                        fontSize: "15px",
                      }}
                      onClick={handleSubmit(handleClickOpen)}
                    >
                      送信する
                    </Button>
                  </Box>
                  <li className="item">
                    <p>
                      送信ボタンを押すと、
                      <Link href={"/terms"}>利用規約</Link>
                      と、
                      <Link href={"/privacy_policy"}>プライバシーポリシー</Link>
                      に同意したことになります。
                    </p>
                  </li>
                </ul>
                <MeruboDialog
                  open={open}
                  onClose={handleClose}
                  actionPromise={onSubmit}
                />
              </form>
            </Box>
          </Box>
        </section>
      ) : (
        <section>
          <div>
            寄せ書きはすでに送られています。メッセージの追加はできません。
          </div>
        </section>
      )}
    </>
  );
};

export default CreateMessage;
