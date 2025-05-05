import { enqueueSnackbar } from "notistack";
import { useCreateMessageBordTemplateMutation } from "../hooks/useCreateMessageBordTempMutation";
import CreateMessageBordTempPresentation from "./CreateMessageBordTempPresentation";
import FullScreenLoading from "../../../components/loading/CircleLoading";
import { useState } from "react";
import { CreateMessageBordTempParam } from "../type/CreateMessageBordTempParam";
import { createMessageBordTemplate } from "../api/createMessageBordTemplate";
import { uploadImage } from "../../../api/uploadImage";

type Props = {
  isOpen: boolean;
  handlerClose: () => void;
  categoryId: string;
};

const CreateMessagebordTempContainer: React.FC<Props> = ({
  isOpen,
  handlerClose,
  categoryId,
}) => {
  const { createMutation } = useCreateMessageBordTemplateMutation(categoryId);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <>
      <FullScreenLoading open={isLoading} />
      <CreateMessageBordTempPresentation
        isOpen={isOpen}
        handlerClose={handlerClose}
        categoryId={categoryId}
        onCreateMessageBordTemp={async (
          categoryId,
          messageBord,
          uploadImageFile
        ) => {
          setIsLoading(true);
          // 背景画像
          const filePath = `message_bord_template/${uploadImageFile.name}`;
          const imageUrl = await uploadImage(uploadImageFile, filePath, false); // 例外あり

          const newParam = {
            ...messageBord,
            templateImageUrl: imageUrl,
          };
          await createMutation.mutateAsync(
            {
              categoryId: categoryId,
              data: newParam,
            },
            {
              onSuccess(data, variables, context) {
                enqueueSnackbar("登録に成功しました。", {
                  variant: "success",
                });
              },
              onError(error, variables, context) {
                enqueueSnackbar("登録に失敗しました。", {
                  variant: "error",
                });
              },
              onSettled(data, error, variables, context) {
                // 成功時、失敗時に呼ばれる
                handlerClose();
                setIsLoading(false);
              },
            }
          );
        }}
      />
    </>
  );
};
export default CreateMessagebordTempContainer;
