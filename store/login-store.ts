// import { create } from 'zustand'
// import { devtools, persist } from 'zustand/middleware'

// type Store = {
//     email: string
//     password: string
//     error: string
//     success: string
// }

// const initialValues = {
//     email: '',
//     password: '',
//     error: '',
//     success: ''
// }

// const useLoginStore = create<Store>(
//     devtools(
//       persist(
//         (set) => ({
//           email: '',
//           password: '',
//           error: '',
//           success: '',
//           setEmail: (email: any) => set({ email }),
//           setPassword: (password: any) => set({ password }),
//           setError: (error: any) => set({ error }),
//           setSuccess: (success: any) => set({ success }),
//         }),
//         { name: 'form-storage' }
//       )
//     )
// )  