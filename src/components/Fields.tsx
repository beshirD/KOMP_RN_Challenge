import {
  IndexPath,
  Input,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {DataModel, Field} from '../types';

interface FieldsProps {
  dataModels: DataModel[];
  functions: any;
  selectedIndex: IndexPath;
}
const Fields = ({dataModels, functions, selectedIndex}: FieldsProps) => {
  const styles = useStyleSheet(themedStyles);
  // values to store input state
  const [values, setValues] = useState<any>({});
  // selecting fields from the selected index that comes from dropdown
  const selectedFields: any = dataModels[selectedIndex.row].fields;
  // constructing array of fields keys
  const fieldKeys: string[] = Object.keys(selectedFields);

  // input on change hanlder that changes input values and display output values
  const handleOnChange = (key: string, nextValue: string) => {
    // creating new updated values
    const updatedValues: any = {...values, [key]: nextValue};
    setValues(updatedValues);

    // collecting the editable field values as parameters
    // that should be passed to the functions
    const parameters: string[] = fieldKeys
      .filter((k: string) => !selectedFields[k].readOnly)
      .map((k: string) => updatedValues[k] || '');

    // calling output functions
    fieldKeys
      .filter((k: string) => selectedFields[k].readOnly)
      .forEach((k: string) => {
        const res: string = functions[k](parameters);
        setValues((prev: any) => ({...prev, [k]: res}));
      });
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      {fieldKeys.map((key: string) => {
        const field: Field = selectedFields[key];
        return (
          <Input
            key={key}
            disabled={field.readOnly}
            label={field.label}
            onChangeText={nextValue => handleOnChange(key, nextValue)}
            style={styles.input}
            value={values[key] || ''}
            placeholder={
              field.readOnly
                ? 'Output will come once you fill input'
                : `Enter input value of ${field.label.toLowerCase()}`
            }
          />
        );
      })}
    </KeyboardAwareScrollView>
  );
};

export default Fields;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  input: {
    marginVertical: 10,
  },
});
