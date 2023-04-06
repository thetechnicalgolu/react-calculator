import { Button, Grid, styled } from "@mui/material";
import React from "react";

interface GridOperationButtonProps {
  operation: string;
  selectOperation: (digit: string) => void;
  selectedOperation: string;
}

const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
  backgroundColor: "rgb(254, 241,73,.1)",
  borderColor: props.selected ? "#fff" : "rgba(255, 241,73, 0.5)",
}));

const GridOperationButton: React.FC<GridOperationButtonProps> = ({
  operation,
  selectOperation,
  selectedOperation = 3,
}) => {
  return (
    <Grid item xs={3}>
      <StyledButton
        fullWidth
        variant="outlined"
        onClick={() => selectOperation(operation)}
        selected={selectedOperation === operation}
      >
        {operation}
      </StyledButton>
    </Grid>
  );
};

export default GridOperationButton;
