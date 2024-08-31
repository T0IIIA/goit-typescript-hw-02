
import { Field, Form, Formik, FormikHelpers } from 'formik';
import s from './SearchBr.module.css'
import { FormValues, SearchBarProps } from './SearchBar.type';
import { ReactElement } from 'react';

const SearchBar = ({ onSubmit, notify }: SearchBarProps): ReactElement => {
  const initValues: FormValues = {
    search: '',
  }

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>) => {
    
    const { search } = values

    if (!search.trim()) {
      return notify()
    }
    onSubmit(search)
    actions.resetForm()
  }

  return (
    <header className={s.header}>
      <Formik initialValues={initValues} onSubmit={handleSubmit}>
          <Form className={s.form}>
              <button type='submit' className={s.btn}>🔍</button>
              <Field
                type='search'
                name='search'
                autoComplete='off'
                autoFocus
                placeholder='Search images and photos'
                className={s.input}
              />
          </Form>
      </Formik>
    </header>
  )
}

export default SearchBar

