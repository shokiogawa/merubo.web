import Image from "next/image";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Great_Vibes } from "next/font/google";

type Props = {
  mainMessage: string;
  mainMessageColor: string;
  mainMessageSize: number;
  backgroundImage: string;
};

const GreatVidesFonts = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

// 色のチェック
const getColor = (colorString: string): string => {
  if (colorString === "orangeAccent") {
    return "orange";
  }
  return colorString;
};

const MessageBordTop: React.FC<Props> = ({
  mainMessage,
  mainMessageColor,
  mainMessageSize,
  backgroundImage,
}) => {
  return (
    <Card sx={{ height: 400, width: 220 }}>
      <CardCover>
        {backgroundImage !== "" ? (
          <Image
            src={backgroundImage}
            width={220}
            height={400}
            alt={mainMessage}
          />
        ) : (
          <></>
        )}
      </CardCover>
      <CardContent sx={{ justifyContent: "center", position: "relative" }}>
        {/* 背景の白 */}
        <Typography
          component="div"
          sx={{
            height: "35%",
            width: "100%",
            position: "absolute",
            backgroundColor: "white",
            opacity: 0.6,
            padding: "10px",
          }}
        ></Typography>
        {/* メッセージ部分 */}
        <Typography
          component="div"
          sx={{
            display: "flex",
            flexFlow: "column",
            position: "absolute",
            justifyContent: "space-around",
            height: "35%",
            width: "100%",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <Typography component="p" sx={{ display: "block", fontSize: "7px" }}>
            {"寄せ書き受取人名が入ります"}
          </Typography>
          <Typography
            className={GreatVidesFonts.className}
            component="p"
            sx={{
              display: "block",
              fontSize: mainMessageSize * 0.38,
              color: getColor(mainMessageColor),
            }}
          >
            {mainMessage}
          </Typography>

          <Typography component="p" sx={{ display: "block", fontSize: "7px" }}>
            {"寄せ書きのタイトルメッセージが入ります"}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MessageBordTop;
