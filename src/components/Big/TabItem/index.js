import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconAkun,
  IconAkunAktif,
  IconHome,
  IconHomeAktif,
  IconPesanan,
  IconPesananAktif,
} from '../../../assets';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') return isFocused ? <IconHomeAktif /> : <IconHome />;

    if (label === 'Contact')
      return isFocused ? <IconPesananAktif /> : <IconPesanan />;

    if (label === 'Profile')
      return isFocused ? <IconAkunAktif /> : <IconAkun />;

    return <IconHome />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: 14,
    color: isFocused ? '#FFFFFF' : 'grey',
    marginTop: 5,
  }),
});
