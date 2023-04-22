import React, {useState} from 'react';
import {
  IndexPath,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native';

import DataModelDropdown from '../components/DataModelDropdown';
import Fields from '../components/Fields';
import {dataModels, functions} from '../utils';

const MainLayout = (): JSX.Element => {
  const styles = useStyleSheet(themedStyles);
  // selected Index for the dropdown option
  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(
    new IndexPath(0),
  );

  return (
    <Layout level="2" style={styles.main}>
      <SafeAreaView style={styles.safeare}>
        <Layout style={styles.headerContainer}>
          <Layout style={styles.headerTextContainer}>
            <Text category="h4" style={styles.header}>
              Coding Challange
            </Text>
          </Layout>

          <DataModelDropdown
            dataModels={dataModels}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </Layout>

        <Layout level="2" style={styles.fieldContainer}>
          <Fields
            functions={functions}
            selectedIndex={selectedIndex}
            dataModels={dataModels}
          />
        </Layout>
      </SafeAreaView>
    </Layout>
  );
};

export default MainLayout;

const themedStyles = StyleService.create({
  fieldContainer: {
    flex: 1,
    padding: 10,
  },
  header: {
    textAlign: 'center',
  },
  headerContainer: {
    padding: 10,
  },
  headerTextContainer: {
    marginBottom: 10,
  },
  main: {
    flex: 1,
  },
  safeare: {
    flex: 1,
  },
});
