import { Button } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import CreateMessageBordTempComponent from "../../../feature/category/component/CreateMessageBordTemp";
const MessageBordTemplateList = () => {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const openFormHandler = () => {
    setIsOpenForm(!isOpenForm);
  };
  return (
    <section className="template_list">
      <h3 className="title">【寄せ書き一覧】</h3>
      <MessageBordTemplateList />
      <div className="button">
        <Button onClick={openFormHandler}>
          {isOpenForm ? "閉じる" : "テンプレートを追加する"}
        </Button>
      </div>
    </section>
  );
};

export default MessageBordTemplateList;
