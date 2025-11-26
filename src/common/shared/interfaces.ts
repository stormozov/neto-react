export interface IProjectContent {
  title: string;
  descriptionShort?: string;
  descriptionLong?: string;
  tags?: string[];
}

export interface IProjectList {
  id: string;
  order: number;
  content: IProjectContent;
  Component: React.ComponentType;
}
