export enum ModulePosition {
  topLeft = "topLeft",
  top = "top",
  topRight = "topRight",
  middleLeft = "middleLeft",
  middle = "middle",
  middleRight = "middleRight",
  bottomLeft = "bottomLeft",
  bottom = "bottom",
  bottomRight = "bottomRight",
}

export interface ModuleProps {
  position: ModulePosition;
  width: number;
  height: number;
  extraProps?: object;
}
