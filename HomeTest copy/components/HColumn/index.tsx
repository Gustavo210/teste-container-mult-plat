import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  children: React.ReactNode;
}

export default function HColumn({ children }: Props) {
  return <View style={styles.column}>{children}</View>;
}

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    display: 'flex',
    width: '100%',
  },
});
