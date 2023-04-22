import React from 'react';
import {IndexPath, Select, SelectItem} from '@ui-kitten/components';
import {DataModel} from '../types';

interface DataModelDropdownProps {
  dataModels: DataModel[];
  selectedIndex: IndexPath;
  setSelectedIndex: Function;
}

const DataModelDropdown = ({
  dataModels,
  selectedIndex,
  setSelectedIndex,
}: DataModelDropdownProps): JSX.Element => {
  // display name to show when the dropdown is selected
  const displayValue = dataModels[selectedIndex?.row].name;

  return (
    <Select
      selectedIndex={selectedIndex}
      value={displayValue}
      onSelect={index => setSelectedIndex(index)}>
      {dataModels.map((model: DataModel, key: number) => (
        <SelectItem key={key} title={model.name} />
      ))}
    </Select>
  );
};

export default DataModelDropdown;
