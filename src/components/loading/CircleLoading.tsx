import { CircularProgress, Box } from "@mui/material";

type Props = {
  open: boolean;
};

const FullScreenLoading: React.FC<Props> = ({ open }) => {
  if (!open) return null;
  return (
    open && (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // 半透明の背景
          zIndex: (theme) => theme.zIndex.modal + 1, // 他の要素より前面に表示
        }}
      >
        <CircularProgress />
      </Box>
    )
  );
};

export default FullScreenLoading;
