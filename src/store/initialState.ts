type initialStateTypes = {
  data: [
    {
      [key: string]: any;
    }
  ];
};

export const initialState: initialStateTypes = {
  data: JSON.parse(localStorage.getItem("data") as string) || [],
};
