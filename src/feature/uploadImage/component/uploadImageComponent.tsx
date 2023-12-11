import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@mui/joy";
import { CameraAltOutlined } from "@material-ui/icons";

type Props = {
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const UploadImageComponent: React.FC<Props> = ({ id, onChange }) => {
  const [imageSrc, setImageSrc] = useState<string>("");

  const handleImagePreview = async (event: ChangeEvent<HTMLInputElement>) => {
    console.log("handleImagePreview");
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
      setImageSrc(reader.result as string);
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
        <Card style={{ height: "110px" }}>
          <CardContent>
            <div className="merubo-card">
              <CameraAltOutlined
                className="camera-icon"
                style={{ height: "35px", width: "35px" }}
              />
              <p className="title">テンプレート画像をアップロード</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="image-area">
          <Image alt={"name"} src={imageSrc} width={100} height={100} />
        </div>
      )}
    </label>
  );
};

export default UploadImageComponent;
