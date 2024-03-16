import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Avatar } from "@material-ui/core/";

type Props = {
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
const MessageThumbnailUpload: React.FC<Props> = ({ id, onChange }) => {
  const [imageSrc, setSrc] = useState<string>();
  // プレビュー表示
  const handleImagePreview = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    if (files == null) {
      return;
    }
    const file = files[0];
    if (file == null) {
      return;
    }
    let reader = new FileReader();
    //result属性にファイルのURLを保存してくれる。
    reader.readAsDataURL(file);
    reader.onload = () => {
      setSrc(reader.result as string);
    };
    onChange(event);
  };
  return (
    <>
      <label htmlFor={id}>
        <input
          hidden
          type="file"
          accept="image/*"
          id={id}
          onChange={handleImagePreview}
        />
        <Avatar
          alt={id}
          src={imageSrc}
          style={{ height: "70px", width: "70px" }}
        ></Avatar>
      </label>
    </>
  );
};

export default MessageThumbnailUpload;
