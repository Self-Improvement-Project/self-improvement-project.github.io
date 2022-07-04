import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ClearIcon from "@mui/icons-material/Clear";
import SortIcon from "@mui/icons-material/Sort";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import * as React from "react";
import { CSSProperties, useState } from "react";
import styled from "styled-components";


const StyledMenuItem = styled(MenuItem)`
  background-color: white !important;
  min-width: 200px;
`;

const MenuText = styled.span`
  margin-top: 5px;
`;

const styles: Record<string, CSSProperties> = {
    MenuIcon: {
        marginRight: 10
    }
};

export const SORT_OPTIONS = [
    "Chronologically",
    "Reverse-Chronologically",
    "Alphabetically",
    "Reverse-Alphabetically",
    "None"
] as const;
export type ISortOption = typeof SORT_OPTIONS[number];

interface Props {
    sortBy: string;
    setSortBy: (s: ISortOption) => void;
}

export default ({sortBy, setSortBy}: Props) => {
    const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Tooltip title={`Sort: ${sortBy}`} placement="top">
            <div>
                <IconButton
                    onClick={handleClick}
                >
                    <SortIcon/>
                </IconButton>
                <Menu
                    open={open}
                    onClose={handleClose}
                    anchorEl={anchorEl}
                >
                    <StyledMenuItem
                        onClick={() => {
                            setSortBy("Alphabetically");
                            handleClose();
                        }}
                    >
                        <SortByAlphaIcon style={styles.MenuIcon}/>
                        <MenuText> Alphabetically </MenuText>
                    </StyledMenuItem>
                    <StyledMenuItem
                        onClick={() => {
                            setSortBy("Reverse-Alphabetically");
                            handleClose();
                        }}
                    >
                        <SortByAlphaIcon style={styles.MenuIcon}/>
                        <MenuText> Reverse-Alphabetically </MenuText>
                    </StyledMenuItem>
                    <StyledMenuItem
                        onClick={() => {
                            setSortBy("Chronologically");
                            handleClose();
                        }}
                    >
                        <AccessTimeIcon style={styles.MenuIcon}/>
                        <MenuText> Chronologically </MenuText>
                    </StyledMenuItem>
                    <StyledMenuItem
                        onClick={() => {
                            setSortBy("Reverse-Chronologically");
                            handleClose();
                        }}
                    >
                        <AccessTimeIcon style={styles.MenuIcon}/>
                        <MenuText> Reverse-Chronologically </MenuText>
                    </StyledMenuItem>
                    <StyledMenuItem
                        onClick={() => {
                            setSortBy("None");
                            handleClose();
                        }}
                    >
                        <ClearIcon style={styles.MenuIcon}/>
                        <MenuText> None </MenuText>
                    </StyledMenuItem>
                </Menu>
            </div>
        </Tooltip>
    );
};

