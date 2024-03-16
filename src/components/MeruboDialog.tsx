import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Slide,
  CircularProgress,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { ReactEventHandler, useState } from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
  open: boolean;
  onClose: ReactEventHandler;
  actionPromise: () => Promise<void>;
};

const MeruboDialog: React.FC<Props> = ({ open, onClose, actionPromise }) => {
  const handleReload = () => {
    window.location.reload();
  };

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const startSubmittingHandler = () => {
    setIsSubmitting(true);
  };

  const stopSubmittingHandler = () => {
    setIsSubmitting(false);
  };

  const [message, setMessage] = useState<String>();

  // 送信ハンドラー
  const submithandler = async (): Promise<void> => {
    try {
      startSubmittingHandler();
      await actionPromise();
      setMessage("メッセージの作成に成功しました。");
    } catch (err) {
      setMessage("予期せぬエラーが発生しました。");
    } finally {
      stopSubmittingHandler();
    }
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {isSubmitting ? "送信中" : message ? "" : "メッセージを送信しますか？"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {isSubmitting ? (
            <CircularProgress />
          ) : message ? (
            message
          ) : (
            "送信したメッセージは編集できません"
          )}
        </DialogContentText>
      </DialogContent>
      {isSubmitting ? (
        <></>
      ) : message ? (
        <DialogActions>
          <Button onClick={handleReload}>閉じる</Button>
        </DialogActions>
      ) : (
        <DialogActions>
          <Button onClick={onClose}>キャンセル</Button>
          <Button onClick={submithandler} autoFocus>
            送信
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default MeruboDialog;
