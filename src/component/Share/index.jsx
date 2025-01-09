/** @jsxImportSource @emotion/react */
import * as React from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShareIcon } from "../../config/GetImages";

const Box = loadable(() => import("@mui/material/Box"));
const Menu = loadable(() => import("@mui/material/Menu"));
const MenuItem = loadable(() => import("@mui/material/MenuItem"));
const ListItemIcon = loadable(() => import("@mui/material/ListItemIcon"));
const Divider = loadable(() => import("@mui/material/Divider"));
const IconButton = loadable(() => import("@mui/material/IconButton"));
const Tooltip = loadable(() => import("@mui/material/Tooltip"));
const LinkIcon = loadable(() => import("@mui/icons-material/Link"));
const FacebookIcon = loadable(() => import("@mui/icons-material/Facebook"));
const LinkedInIcon = loadable(() => import("@mui/icons-material/LinkedIn"));

const ShareComponent = ({ setCopied }) => {
  const pathname = usePathname();
  const currentUrl = `${process.env.NEXT_PUBLIC_APP_ROOT_URL}${pathname}`;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleFacebookShare = () => {
    window.open(
      `{https://www.facebook.com/sharer/sharer.php?u=${currentUrl}}`,
      "_blank"
    );
    handleClose();
  };

  const handleLinkedInShare = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
      "_blank"
    );
    handleClose();
  };
  const handleCopyUrl = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        handleClose();
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Error copying URL to clipboard:", err);
      });
  };
  return (
    <>
      <Box sx={{ float: "right" }}>
        <Tooltip title="Share">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Image alt={`ShareIcon`} src={ShareIcon} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleCopyUrl}>
          <ListItemIcon>
            <LinkIcon fontSize="small" />
          </ListItemIcon>
          Copy link
        </MenuItem>
        <Divider />
        {/* <MenuItem onClick={handleInstagramShare}>
          <ListItemIcon>
            <InstagramIcon fontSize="small" />
          </ListItemIcon>
          Share on Instagram
        </MenuItem> */}
        <MenuItem onClick={handleFacebookShare}>
          <ListItemIcon>
            <FacebookIcon fontSize="small" />
          </ListItemIcon>
          Share on Facebook
        </MenuItem>
        <MenuItem onClick={handleLinkedInShare}>
          <ListItemIcon>
            <LinkedInIcon fontSize="small" />
          </ListItemIcon>
          Share on LinkedIn
        </MenuItem>
      </Menu>
    </>
  );
};

ShareComponent.propTypes = {
  setCopied: PropTypes.func.isRequired,
};

export default ShareComponent;
