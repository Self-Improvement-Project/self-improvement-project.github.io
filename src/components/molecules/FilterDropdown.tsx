import { VisibilityOff } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
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

export const FILTER_OPTIONS = [
    "Read",
    "Unread",
    "None"
] as const;
export type IFilterOption = typeof FILTER_OPTIONS[number];

interface Props {
    filterBy: string;
    setFilterBy: (s: IFilterOption) => void;
}

export default ({filterBy, setFilterBy}: Props) => {
    const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Tooltip title={`Filter: ${filterBy}`} placement="top">
            <div>
                <IconButton
                    onClick={handleClick}
                >
                    <FilterAltIcon/>
                </IconButton>
                <Menu
                    open={open}
                    onClose={handleClose}
                    anchorEl={anchorEl}
                >
                    <StyledMenuItem
                        onClick={() => {
                            setFilterBy("Read");
                            handleClose();
                        }}
                    >
                        <VisibilityIcon style={styles.MenuIcon}/>
                        <MenuText> Read </MenuText>
                    </StyledMenuItem>
                    <StyledMenuItem
                        onClick={() => {
                            setFilterBy("Unread");
                            handleClose();
                        }}
                    >
                        <VisibilityOff style={styles.MenuIcon}/>
                        <MenuText> Unread </MenuText>
                    </StyledMenuItem>
                    <StyledMenuItem
                        onClick={() => {
                            setFilterBy("None");
                            handleClose();
                        }}
                    >
                        <ClearIcon style={styles.MenuIcon}/>
                        <MenuText> All </MenuText>
                    </StyledMenuItem>
                </Menu>
            </div>
        </Tooltip>
    );
};

