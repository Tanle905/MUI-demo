import { ATBranding } from "@/components/atoms/link/branding.atom";
import { sidebarMenuItems } from "@/constants/variables";
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

export function MCSidebarMenu(props: any) {
  const [open, setOpen] = useState(false);

  function handleCloseDrawer() {
    setOpen(false);
  }
  return (
    <Drawer
      onClose={handleCloseDrawer}
      // open={open}
      anchor="left"
      variant="persistent"
      className="bg-gray-900"
      PaperProps={{
        sx: {
          background: "#111827",
        },
      }}
      sx={{
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
      }}
    >
      <Toolbar>
        <ATBranding />
      </Toolbar>
      <List>
        {sidebarMenuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon && item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
