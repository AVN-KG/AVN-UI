import { ReactElement } from "react";

interface BorderPosition {
  x?: boolean;
  y?: boolean;
}

export default interface TableProps {
  theadChild?: ReactElement;
  tbodyChild?: ReactElement;
  border?: BorderPosition;
}
