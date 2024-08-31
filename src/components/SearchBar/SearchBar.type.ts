import { FormikHelpers } from "formik"

export interface SearchBarProps {
  onSubmit: (search: string) => void
  notify: () => void
}

export interface FormValues {
  search: string
}
