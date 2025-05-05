import { Box } from "@mui/material";
import useCategoryQuery from "./hooks/useCategoryQuery";
import ManagePresentation from "./ManagePresentation";

const ManageContainer = () => {
  const { isLoading, data, error, refetch } = useCategoryQuery();
  if (error) return <div>エラーが発生しました。</div>;
  if (isLoading)
    return <Box sx={{ height: "calc(100vh - 100px)" }}>loading......</Box>;
  return (
    <>
      <ManagePresentation data={data || []} />
    </>
  );
};
export default ManageContainer;
