import { NextPage } from "next";
import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import { v4 } from "uuid";
import { useRouter } from "next/router";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
} from "@material-ui/core/";
import { SubmitHandler, useForm } from "react-hook-form";
import { uploadImage } from "../../../api/uploadImage";
import { Message } from "../../../types/Message";
import createMessage from "../../../feature/message/api/createMessage";
import { useMessageBordSWR } from "../../../feature/messageBord/hooks/useMessageBordSWR";
import { Typography } from "@mui/joy";
import { Box } from "@mui/material";
import MessageThumbnailUpload from "../../../feature/message/component/MessageThumbnailUpload";
import UploadImage from "../../../components/UploadImage";
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
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<InputData>();
  const [uploadFile, setUploadFile] = useState<File>();
  const [avaterFile, setAvaterFile] = useState<File>();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setisSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<String>();
  const handleReload = () => {
    window.location.reload();
  };
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
  const onSubmit: SubmitHandler<InputData> = async (data): Promise<void> => {
    setisSubmitting(true);
    if (messageBordId) {
      setisSubmitting(true);
      try {
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
          userName: data.userName,
          content: data.content,
          thumbnail: thumbnail,
          image: image,
          createdAt: currentDate,
          updatedAt: currentDate,
        };
        await createMessage(messageBordId, message);
        setMessage("メッセージの送信に成功しました。");
      } catch (err) {
        setMessage(
          "メッセージの送信に失敗しました。少し時間を開け、再度送信してください。"
        );
        throw err;
      } finally {
        setisSubmitting(false);
      }
    } else {
      setMessage("URLをご確認の上再度送信してください");
      setisSubmitting(false);
    }
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
          <div className="merubo-title">
            <Typography
              component="h2"
              sx={{ padding: "5px", textAlign: "center", fontSize: "20px" }}
              className="title"
            >
              {messageBordData?.receiverUserName}
              さんへ{messageBordData.category}のお祝いを送りましょう
            </Typography>
            <Typography
              sx={{ fontSize: "15px", paddingTop: "20px" }}
              component="p"
              className="text"
            >
              メッセージを追加
            </Typography>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="merubo-form">
            <ul className="items">
              <Box component="li" className="item">
                <label htmlFor="userName">お名前</label>
                <input
                  id="userName"
                  {...register("userName", { required: true })}
                  type="text"
                  defaultValue={""}
                  placeholder="自分の名前を入力"
                />
                {errors.userName && <span>名前が入力されていません。</span>}
              </Box>

              <Box component="li" sx={{ margin: "0 auto", width: "100px" }}>
                <Typography
                  component="p"
                  sx={{ fontSize: "15px", paddingBottom: "5px" }}
                >
                  あなたの写真
                </Typography>
                <MessageThumbnailUpload
                  id={"avater"}
                  onChange={handleSetThumbnailImage}
                />
              </Box>

              <li className="item">
                <label htmlFor="content">メッセージ</label>
                <textarea
                  id="content"
                  placeholder="送りたいメッセージを入力してください"
                  {...register("content", { required: true })}
                ></textarea>
                {errors.content && <span>メッセージが入力されていません</span>}
              </li>
              <li className="item">
                <p>写真</p>
                <p className="sub-label">思い出の写真を送りましょう</p>
                <UploadImage
                  id="image"
                  wrapName="思い出の写真をアップロード"
                  onChange={handleSetUploadImage}
                />
              </li>
              <li className="item button-item">
                <button onClick={handleSubmit(handleClickOpen)}>
                  送信する
                </button>
              </li>
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
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {isSubmitting
                  ? "送信中"
                  : message
                  ? ""
                  : "メッセージを送信しますか？"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {isSubmitting
                    ? "少々お待ちください"
                    : message
                    ? message
                    : "送信したメッセージは編集できません"}
                </DialogContentText>
              </DialogContent>
              {isSubmitting ? (
                <></>
              ) : message ? (
                <DialogActions>
                  <Button onClick={handleReload}>戻る</Button>
                </DialogActions>
              ) : (
                <DialogActions>
                  <Button onClick={handleClose}>キャンセル</Button>
                  <Button onClick={handleSubmit(onSubmit)} autoFocus>
                    送信
                  </Button>
                </DialogActions>
              )}
            </Dialog>
          </form>
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
