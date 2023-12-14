import { useCategoryListSWR } from "../hooks/useCategorySWR";
import { Tab, TabList, TabPanel, Tabs, Typography } from "@mui/joy";
import MessageBordTemplateList from "./MessageBordTemplateList";
import { Category } from "../../../types/Category";

const CategoryListComponent = () => {
  const { categoryDatas, error } = useCategoryListSWR();

  if (error) return <div>エラーが発生しました。</div>;
  if (!categoryDatas) return <div>loading......</div>;
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
        <Tabs
          sx={{ paddingTop: "20px" }}
          onChange={(event) => {
            console.log(event?.target);
          }}
        >
          <TabList>
            {categoryDatas &&
              categoryDatas.map((category) => (
                <Tab key={category.id}>{category.nameJp}</Tab>
              ))}
          </TabList>
          {categoryDatas &&
            categoryDatas.map((category: Category, index: number) => (
              <TabPanel key={category.id} value={index}>
                <MessageBordTemplateList categoryId={category.id} />
              </TabPanel>
            ))}
        </Tabs>
      </Typography>
    </>
  );
};

export default CategoryListComponent;
