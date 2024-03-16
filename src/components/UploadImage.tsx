import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import Image from "next/image";
import { Card } from "@mui/joy";
import { ImageOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

type Props = {
  id: string;
  wrapName: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const UploadImage: React.FC<Props> = ({ id, onChange, wrapName }) => {
  const [imageSrc, setImageSrc] = useState<string>("");

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
        <Card style={{ border: "1px dashed orange" }} sx={{ height: "100%" }}>
          <Typography component="div" sx={{ textAlign: "center" }}>
            <ImageOutlined
              sx={{ color: "orange" }}
              style={{ height: "10%", width: "20%" }}
            ></ImageOutlined>
            <Typography fontSize="15px">{wrapName}</Typography>
          </Typography>
        </Card>
      ) : (
        <Box component="div" className="image-area">
          <Image
            alt={"name"}
            src={imageSrc}
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
      )}
    </label>
  );
};

export default UploadImage;
