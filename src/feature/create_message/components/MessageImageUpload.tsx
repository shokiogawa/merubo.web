import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@material-ui/core/";
import { CameraAltOutlined } from "@material-ui/icons";

type Props = {
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const MessageImageUpload: React.FC<Props> = ({ id, onChange }) => {
  const [imageSrc, setSrc] = useState<string>("");

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
    <label htmlFor={id}>
      <input
        hidden
        type="file"
        accept="image/*"
        id={id}
        onChange={handleImagePreview}
      />
      {imageSrc === "" ? (
        <Card className="" style={{ height: "110px" }}>
          <CardContent className="">
            <div className="merubo-card">
              <CameraAltOutlined
                className="camera-icon"
                style={{ height: "35px", width: "35px" }}
              />
              <p className="title">思い出の写真をアップロード</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="image-area">
          <Image
            alt={"name"}
            src={imageSrc}
            fill
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
    </label>
  );
};

export default MessageImageUpload;
