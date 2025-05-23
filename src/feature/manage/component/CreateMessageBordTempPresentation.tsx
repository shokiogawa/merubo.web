import { SubmitHandler, useForm } from "react-hook-form";
import { MessageBord } from "../../../types/MessageBord";
import { createRandum } from "../../../utility/createRandum";
import React, { ChangeEvent, useState } from "react";
import { animationTemp } from "../../../const/animation";
import { MainMessageColors } from "../../../const/mainMessageColor";
import { useSearchParams } from "next/navigation";
import {
  Button,
  FormLabel,
  Input,
  Modal,
  ModalDialog,
  Option,
  Select,
  Stack,
  Typography,
} from "@mui/joy";
import MessageBordTop from "../../../components/MessageBordTop";
import UploadImage from "../../../components/UploadImage";

type Props = {
  isOpen: boolean;
  handlerClose: () => void;
  onCreateMessageBordTemp: (
    categoryId: string,
    messageBord: MessageBord,
    file: File
  ) => Promise<void>;
  categoryId: string;
};

const CreateMessageBordTempPresentation: React.FC<Props> = ({
  isOpen,
  handlerClose,
  categoryId,
  onCreateMessageBordTemp,
}) => {
  const searchParam = useSearchParams();
  const categoryName = searchParam.get("category") as string;
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isValid, errors },
  } = useForm<MessageBord>();
  // アップロードファイルの保存
  const [uploadImageFile, setUploadImageFile] = useState<File>();
  // ユーザーへのメッセージ
  const [message, setMessage] = useState<string>();
  // メインメッセージ関連
  const [mainMessage, setMainMessage] = useState<string>("");
  const [mainMessageSize, setMainMessageSize] = useState<number>(40);
  const [mainMessageColor, setMainMessageColor] = useState<string>("black");
  const [backGroundImage, setBackbroundImage] = useState<string>("");

  // メインメッセージ
  const handlerMainMessage = (event: ChangeEvent<HTMLInputElement>) => {
    setMainMessage(event.target.value);
  };
  // メインメッセージのサイズ
  const handlerMainMessageSize = (event: ChangeEvent<HTMLInputElement>) => {
    setMainMessageSize(Number(event.target.value));
  };

  // メインメッセージの色
  const handlerSetMainMessageColor = (
    event: React.SyntheticEvent | null,
    newValue: string | null
  ) => {
    setMainMessageColor(newValue ?? "black");
  };

  // 背景画像のハンドラー
  const handleSetUploadImageFile = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    if (files == null) {
      return;
    }
    const file = files[0];
    if (file === null) {
      return;
    }
    let reader = new FileReader();
    //result属性にファイルのURLを保存してくれる。
    reader.readAsDataURL(file);
    reader.onload = () => {
      setBackbroundImage(reader.result as string);
    };
    setUploadImageFile(file);
  };

  // 提出処理のハンドラー
  const onSubmitHandler: SubmitHandler<MessageBord> = async (
    data
  ): Promise<void> => {
    if (!uploadImageFile) return;
    const tempMessageBordId = createRandum(19);

    const messageBord: MessageBord = {
      id: tempMessageBordId,
      receiverUserName: "寄せ書き受取人の名前が入ります",
      lastMessage: "最後の全員からのメッセージが入ります",
      title: "寄せ書きのタイトルメッセージが入ります",
      ownerUserName: "田中直哉",
      // TODO: ver1のために一応残している
      categoryEnum: "graduation",
      // 受け取ったカテゴリーを入れる
      category: categoryName,
      status: "edit",
      mainMessage: data.mainMessage,
      mainMessageColor: mainMessageColor,
      mainMessageSize: data.mainMessageSize,
      animationUrl: animationTemp,
      isAnimationLoop: false,
    };

    await onCreateMessageBordTemp(categoryId, messageBord, uploadImageFile);
    reset({ mainMessage: "", mainMessageColor: "", mainMessageSize: 40 });
  };

  return (
    <Modal open={isOpen} onClose={handlerClose}>
      <ModalDialog>
        <Typography component="section" sx={{}}>
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              fontSize: "15px",
              padding: "5px 0px 5px 0px",
            }}
          >
            <p>寄せ書きテンプレート作成</p>
          </Typography>
          <Typography component="div" sx={{ display: "flex", padding: "10px" }}>
            <Typography component="div" sx={{ padding: "0px 30px 0px 0px" }}>
              <Typography component="p" sx={{ paddingBottom: "50px" }}>
                【テンプレート作成】
              </Typography>
              <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="message_bord_temp_foem"
              >
                <Stack spacing={1}>
                  <FormLabel>中央メッセージ</FormLabel>
                  <Input
                    placeholder="中央のメッセージ"
                    {...register("mainMessage", { required: true })}
                    variant="outlined"
                    onChange={handlerMainMessage}
                    type="text"
                  />
                  <FormLabel>色</FormLabel>
                  <Select
                    placeholder="色"
                    defaultValue={"black"}
                    onChange={handlerSetMainMessageColor}
                  >
                    {MainMessageColors.map((color) => (
                      <Option key={color.value} value={color.value}>
                        {color.label}
                      </Option>
                    ))}
                  </Select>
                  <FormLabel>メッセージのサイズ</FormLabel>
                  <Input
                    placeholder="メッセージのサイズ"
                    {...register("mainMessageSize", { required: true })}
                    type="number"
                    defaultValue={mainMessageSize}
                    onChange={handlerMainMessageSize}
                  />
                  <FormLabel>画像を挿入</FormLabel>
                  <div>
                    <UploadImage
                      id="image"
                      wrapName="テンプレート画像"
                      onChange={handleSetUploadImageFile}
                    />
                  </div>
                  <Typography component="div">
                    <Button type="submit">テンプレートを作成する</Button>
                  </Typography>
                </Stack>

                <Typography component="p" sx={{ display: "block" }}>
                  {message ?? <p>{message}</p>}
                </Typography>
              </form>
            </Typography>
            <Typography component="div">
              <Typography component="p" sx={{ padding: "0px 0px 10px 0px" }}>
                【完成予想図】
              </Typography>
              <MessageBordTop
                mainMessage={mainMessage}
                mainMessageColor={mainMessageColor}
                mainMessageSize={mainMessageSize}
                backgroundImage={backGroundImage}
              />
            </Typography>
          </Typography>
        </Typography>
      </ModalDialog>
    </Modal>
  );
};

export default CreateMessageBordTempPresentation;
