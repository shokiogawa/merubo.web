import { Box, Card, CardContent, Typography } from "@mui/joy";
import MessageArea from "./MessageArea";

type Props = {
  message: string;
};

const BottomMessageArea: React.FC<Props> = ({ message }) => {
  return (
    <>
      <Box
        component="div"
        sx={{
          backgroundColor: "orange",
          paddingBottom: "20px",
          margin: "10px",
        }}
      >
        <Box
          component="div"
          sx={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            height: "80px",
          }}
        >
          <Typography
            component="p"
            sx={{
              fontWeight: "bold",
              color: "white",
              fontSize: "20px",
            }}
          >
            Last Message
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            // backgroundColor: "white",
            width: { xs: "95%", md: "60%" },
            margin: "0px auto",
          }}
        >
          <Card
            sx={{
              minHeight: "150px",
              margin: { xs: "50px 20px", md: "0px 50px " },
            }}
          >
            <CardContent>
              <Typography
                component="p"
                sx={{
                  fontSize: "17px",
                  lineHeight: "25px",
                  whiteSpace: "pre-line",
                  padding: "10px",
                  overflowWrap: "break-word",
                }}
              >
                {message}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default BottomMessageArea;
