import { Stack, Typography } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export function ATBranding() {
  return (
    <Stack className="text-white" direction="row" spacing={2} alignItems="center">
      <EmojiEmotionsIcon fontSize="large" />
      <Typography variant="h6">
        Tanle.
      </Typography>
    </Stack>
  );
}
