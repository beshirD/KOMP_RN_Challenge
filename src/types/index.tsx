export type DataModel = {
  name: string;
  fields: object;
};

export type Field = {
  label: string;
  type: number | string;
  readOnly: boolean;
  calculate: string | null;
};
