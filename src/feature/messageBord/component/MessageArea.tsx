import { Box, Typography, Card, Avatar } from "@mui/joy";
import Image from "next/image";
import { Message } from "../../../types/Message";
import { RevealWrapper } from "next-reveal";
type Props = {
  message: Message;
};

const MessageArea: React.FC<Props> = ({ message }) => {
  return (
    <>
      <RevealWrapper>
        <Card
          key={message.id}
          sx={{
            minHeight: "150px",
            margin: { xs: "50px 20px", md: "50px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "relative",
              width: "100%",
              height: "50px",
            }}
          >
            <Avatar
              sx={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                height: "70px",
                width: "70px",
              }}
              src={message.thumbnail}
              size="md"
              alt=""
            />
            <Typography
              component="p"
              sx={{
                position: "absolute",
                left: "60px",
                fontSize: "15px",
              }}
            >
              {message.userName}
            </Typography>
          </Box>
          <Box>
            <Typography
              component="p"
              sx={{
                fontSize: "15px",
                lineHeight: "25px",
                whiteSpace: "pre-line",
              }}
            >
              {message.content}
            </Typography>
          </Box>
          {message.image && (
            <Box sx={{ margin: "12px auto" }}>
              <Image
                src={message.image}
                alt={message.userName}
                height={200}
                width={300}
                style={{ objectFit: "cover" }}
              />
            </Box>
          )}
        </Card>
      </RevealWrapper>
    </>
  );
};

export default MessageArea;
