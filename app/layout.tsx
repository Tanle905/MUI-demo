"use client";

import { Box, ThemeProvider, createTheme } from "@mui/material";
import "./globals.css";
import { OGHeader } from "@/components/organisms/headers/header.organism";
import { SWRConfig } from "swr";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "h1",
          },
          style: {
            color: "white",
          },
        },
        {
          props: {
            variant: "subtitle1",
          },
          style: {
            color: "white",
          },
        },
        {
          props: {
            variant: "subtitle2",
          },
          style: {
            color: "white",
          },
        },
        {
          props: {
            variant: "body1",
          },
          style: {
            color: "white",
          },
        },
      ],
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SWRConfig
          value={{
            revalidateOnFocus: false,
          }}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box pb={5} className="min-h-screen bg-gray-900 px-10">
              <OGHeader />
              {children}
            </Box>
          </ThemeProvider>
        </SWRConfig>
      </body>
    </html>
  );
}
