"use client";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import AcUnitTwoToneIcon from "@mui/icons-material/AcUnitTwoTone";
import DuoTwoToneIcon from "@mui/icons-material/DuoTwoTone";
import PlayCircleOutlineTwoToneIcon from "@mui/icons-material/PlayCircleOutlineTwoTone";
import Link from "next/link";
import Image from "next/image";
import { SPLASH_IMG } from "@/constants/variables";

export default function Home() {
  return (
    <Stack mt={5} spacing={10}>
      <Grid container>
        <Grid item xs={6}>
          <Stack spacing={3}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box className="p-1 bg-blue-800 rounded-full">
                <AcUnitTwoToneIcon color="primary" />
              </Box>
              <Typography variant="caption" color="textPrimary">
                Don't limit yourself
              </Typography>
            </Stack>
            <Box width={584}>
              <Typography variant="h1">
                Accelerate your career with us
              </Typography>
            </Box>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button variant="outlined">Create a resume</Button>
              <Typography
                variant="subtitle2"
                className="underline underline-offset-4"
              >
                <Link href="/">Book a consultation</Link>
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={6} className="relative">
          <Stack
            spacing={2}
            alignItems="center"
            className="z-10 absolute top-64 left-2 text-white w-36 p-5 rounded-3xl bg-blue-700"
          >
            <DuoTwoToneIcon />
            <Typography variant="h6">Meeting</Typography>
            <Typography variant="button">AT 10:00 AM</Typography>
          </Stack>
          <Image
            alt="splash_img"
            src={SPLASH_IMG}
            width={500}
            height={500}
            className="absolute left-20 aspect-[5/6] w-96 rounded-3xl object-cover"
          />
          <Stack
            width={200}
            spacing={2}
            alignItems="center"
            direction="row"
            className="absolute bg-gray-900 -bottom-7 right-40 p-6 rounded-3xl text-white"
          >
            <PlayCircleOutlineTwoToneIcon fontSize="large" />
            <Typography>Let's see how we did it</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid gap={15} container className="text-white">
        <Grid item xs={4} p={5} className="rounded-3xl bg-blue-700">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className="w-full h-full"
            >
              <Box>
                <Typography variant="h3">1500+</Typography>
                <Typography variant="body2">
                  Recruiters on the platform
                </Typography>
              </Box>
              <Stack
                direction="row"
                alignItems="center"
                className="relative w-1/4 h-20"
              >
                <Box className="absolute top-1/4 p-1 rounded-full bg-blue-700">
                  <Avatar sx={{ width: 50, height: 50 }} src={SPLASH_IMG} />
                </Box>
                <Box className="absolute top-1/4 left-10 p-1 rounded-full bg-blue-700">
                  <Avatar sx={{ width: 50, height: 50 }} src={SPLASH_IMG} />
                </Box>
              </Stack>
            </Stack>
            <Divider className="border-white" />
            <Typography variant="button">
              Your gateway to new careers
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={5}>
            <Box width={320}>
              <Typography variant="h4">UNLOCK</Typography>
              <Typography variant="h4" className="text-right">
                YOUR CAREER
              </Typography>
              <Typography variant="h4">POTENTIAL</Typography>
            </Box>
            <Box width={320}>
              <Typography variant="body2" className="text-gray-500">
                Never miss a job opportunity that matches your skills and
                experience with our personalized job alert service
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
