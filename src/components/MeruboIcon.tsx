import { Box, Typography } from "@mui/joy";
import Image from "next/image";
const MeruboIcon = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Image
          src={"/../public/image/merubo_icon_figure.png"}
          alt="Meruboのアイコン"
          width="120"
          height="120"
          priority={true}
          style={{ width: 120, height: 120 }}
        />
      </Box>
      <Typography
        component="h2"
        sx={{
          fontSize: "35px",
          fontWeight: "bold",
        }}
      >
        <span className="firstOrangeColor">M</span>
        <span className="thirdOrangeColor">e</span>
        <span className="secondOrangeColor">r</span>
        <span className="thirdOrangeColor">u</span>
        <span className="secondOrangeColor">b</span>
        <span className="thirdOrangeColor">o</span>
      </Typography>
    </>
  );
};

export default MeruboIcon;
