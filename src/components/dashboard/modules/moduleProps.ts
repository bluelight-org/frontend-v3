export enum ModulePosition {
  topLeft,
  top,
  topRight,
  middleLeft,
  middle,
  middleRight,
  bottomLeft,
  bottom,
  bottomRight,
}

export interface ModuleProps {
  position: ModulePosition;
  width: number;
  height: number;
  extraProps?: any;
}
