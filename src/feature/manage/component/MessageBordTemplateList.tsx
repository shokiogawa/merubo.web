import MessageBordTop from "../../../components/MessageBordTop";
import CreateMessageBordTemp from "./CreateMessageBordTempPresentation";
import { useState } from "react";
import { Box, Button, Grid, ListItem } from "@mui/material";
import useMessageBordTemplateListQuery from "../hooks/useMessageBordTemplateListQuery";
import CreateMessagebordTempContainer from "./CreateMessageBordTempContainer";

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
  const { data, error, isLoading, refetch } =
    useMessageBordTemplateListQuery(categoryId);
  // 色のチェック
  const getColor = (colorString: string): string => {
    if (colorString === "orangeAccent") {
      return "orange";
    }
    return colorString;
  };
  if (error) return <div>エラーが発生しました。</div>;
  if (!data)
    return <Box sx={{ height: "calc(100vh - 340px)" }}>loading......</Box>;
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ flexGrow: 1 }}
      >
        {data &&
          data.map((messageBord) => (
            <Grid key={messageBord.id}>
              <ListItem>
                <MessageBordTop
                  mainMessage={messageBord.mainMessage}
                  mainMessageColor={messageBord.mainMessageColor}
                  mainMessageSize={messageBord.mainMessageSize}
                  backgroundImage={messageBord.templateImageUrl || ""}
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
      <CreateMessagebordTempContainer
        isOpen={isOpen}
        handlerClose={handlerIsClose}
        categoryId={categoryId}
      />
    </>
  );
};

export default MessageBordTemplateList;
