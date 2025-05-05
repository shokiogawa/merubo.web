import { Tab, Tabs, Typography, Box } from "@mui/material";
import { Category } from "../../types/Category";
import MessageBordTemplateList from "./component/MessageBordTemplateList";
import React, { useState } from "react";

type Props = {
  data: Category[];
};

const ManagePresentation: React.FC<Props> = ({ data }) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography
        component="div"
        sx={{ backgroundColor: "white", padding: "10px" }}
      >
        <Typography
          component="div"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography component="h3" sx={{ fontSize: "20px" }}>
            寄せ書きテンプレート一覧
          </Typography>
        </Typography>
        <Tabs value={value} onChange={handleChange} sx={{}}>
          {data &&
            data.map((category, index) => (
              <Tab key={category.id} label={category.nameJp} value={index} />
            ))}
        </Tabs>
        {data &&
          data.map((category: Category, index: number) => (
            <Box key={category.id} role="tabpanel" hidden={value !== index}>
              {value === index && (
                <Box sx={{ marginTop: "30px" }}>
                  <MessageBordTemplateList categoryId={category.id} />
                </Box>
              )}
            </Box>
          ))}
      </Typography>
    </>
  );
};

export default ManagePresentation;
