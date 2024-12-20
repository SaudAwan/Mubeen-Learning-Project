import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of a user object (you can adjust this based on your app's needs)
interface User {
  id: number;
  name: string;
  email: string;
}

// Define the initial state type
interface UserState {
  user: User[]; // Explicitly define the type of the user array
}

const initialState: UserState = {
  user: [], // Initialize as an empty array of type User[]
};

const userSlice = createSlice({
  name: "Mubeen",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.user.push(action.payload); // Payload is explicitly typed as User
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
