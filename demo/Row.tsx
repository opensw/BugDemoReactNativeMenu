//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: I M P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//
import React from "react";
import { View, ViewStyle, TouchableOpacity } from "react-native";

//
// ────────────────────────────────────────────────────────────── I ──────────
//   :::::: T Y P E   S H A P E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────
//
export interface RowProps {
  children?: any;
  flex?: number;
  alongMainAxis?: // justifyContent
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alongCrossAxis?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'; // alignItems
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  width?: number | string;
  style?: ViewStyle | ViewStyle[];
  onLayout?: (event: any) => void,
  onPress?: () => void,
}

//
// ────────────────────────────────────────────── I ──────────
//   :::::: R O W : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────
//
export default function Row(props: RowProps) {
  const {children, style, ...rest} = props;

  return (
    <View style={{
      flex: props.flex !== undefined ? props.flex : 1,
      flexDirection: "row",
      justifyContent: props.alongMainAxis !== undefined ? props.alongMainAxis : "center",
      alignItems: props.alongCrossAxis !== undefined ? props.alongCrossAxis : "center",
      flexWrap: props.wrap !== undefined ? props.wrap : "nowrap",
      width: props.width !== undefined ? props.width : "auto",
      ...style,
        // borderColor: "#00FF00",
        // borderWidth: 1,
      }}
      {...rest}
    >
      {children}
    </View>
  );
}
