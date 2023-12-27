import { useMessageBordTemplateListSWR } from "../hooks/useMessageBordTemplateSWR";
import { Button, Grid, ListItem } from "@mui/joy";
import MessageBordTop from "../../../components/MessageBordTop";
import CreateMessageBordTemp from "./CreateMessageBordTemp";
import { useState } from "react";

type Props = {
  categoryId: string;
};

const MessageBordTemplateList: React.FC<Props> = ({ categoryId }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlerIsOpen = () => {
    setIsOpen(true);
  };

  const handlerIsClose = () => {
    setIsOpen(false);
  };
  const { messageBordTemplateDatas, error } =
    useMessageBordTemplateListSWR(categoryId);
  // 色のチェック
  const getColor = (colorString: string): string => {
    if (colorString === "orangeAccent") {
      return "orange";
    }
    return colorString;
  };
  if (error) return <div>エラーが発生しました。</div>;
  if (!messageBordTemplateDatas) return <div>loading......</div>;
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ flexGrow: 1 }}
      >
        {messageBordTemplateDatas &&
          messageBordTemplateDatas.map((messageBord) => (
            <Grid key={messageBord.id}>
              <ListItem>
                <MessageBordTop
                  mainMessage={messageBord.mainMessage}
                  mainMessageColor={messageBord.mainMessageColor}
                  mainMessageSize={messageBord.mainMessageSize}
                  backgroundImage={messageBord.templateImageUrl}
                />
              </ListItem>
            </Grid>
          ))}
      </Grid>
      <Button
        sx={{ margin: "10px 0px 0px 0px", padding: "10px" }}
        onClick={handlerIsOpen}
      >
        テンプレートを作成する
      </Button>
      <CreateMessageBordTemp
        isOpen={isOpen}
        handlerClose={handlerIsClose}
        categoryId={categoryId}
      />
    </>
  );
};

export default MessageBordTemplateList;
