import React, { useState } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList, Picker } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defualtStyle from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({ 
  icon, 
  placeholder, 
  items, 
  numberOfColumns = 1,
  onSelectItem, 
  PickerItemComponent = PickerItem,
  selectedItem, 
  width = '100%' 
}) {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, {width}]}>
          {icon && (
            <MaterialCommunityIcons 
              name={icon} 
              size={20} 
              color={defualtStyle.colors.medium}
              style={styles.icons}
            />
          )}
          { selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : ( 
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons 
            name='chevron-down'
            size={20} 
            color={defualtStyle.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)}/>
          <FlatList   
            data={items}
            keyExtractor={item => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({item}) => 
              <PickerItemComponent 
                item={item}
                label={item.label} 
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            }
          /> 
        </Screen>
      </Modal>
    </>
  );
} 

const styles = StyleSheet.create({
  container: {
    backgroundColor: defualtStyle.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10 
  },
  text: {
    flex: 1
  },
  placeholder: {
    color: defualtStyle.colors.medium,
    flex: 1
  }
})

export default AppPicker
