import { createAppSlice } from '@/lib/createAppSlice'

const initialState = {
  darkMode: true,
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const darkmodeSlice = createAppSlice({
  name: 'darkmode',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    toggleDarkmode: create.reducer((state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.darkMode = !state.darkMode
    }),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectDarkmode: (darkmode) => darkmode.darkMode,
  },
})

// Action creators are generated for each case reducer function.
export const { toggleDarkmode } = darkmodeSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectDarkmode } = darkmodeSlice.selectors
