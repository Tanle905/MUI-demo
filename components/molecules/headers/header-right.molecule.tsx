import {
  ATHeaderItem,
  ATHeaderItemProps,
} from "@/components/atoms/link/header-item.atom";
import { SCREENROUTE } from "@/constants/screen-routes";
import { Stack, Button } from "@mui/material";

interface MCHeaderRightProps {
  width: string;
}

const headerItems: ATHeaderItemProps[] = [
  {
    title: "Landing Page",
    link: SCREENROUTE.LANDING_PAGE,
  },
  {
    title: "Management",
    link: SCREENROUTE.MANAGEMENT.BASE + SCREENROUTE.MANAGEMENT.TABLE,
  },
];

export function MCHeaderRight({ width }: MCHeaderRightProps) {
  return (
    <Stack
      direction="row"
      justifyContent="end"
      alignItems="center"
      width={width}
      className="space-x-10"
    >
      {headerItems.map(({ link, title }, index) => (
        <ATHeaderItem key={index} link={link} title={title} />
      ))}
      <Button variant="outlined" className="h-10">
        Contact Us
      </Button>
    </Stack>
  );
}
