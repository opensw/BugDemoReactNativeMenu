//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: I M P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//
import { MenuView } from '@react-native-menu/menu';
import React, { useCallback } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  // SafeAreaView,
} from 'react-native';
import { Icon } from 'react-native-elements';

import {SafeAreaView} from 'react-native-safe-area-context';

import Col from './demo/Col';

//
// ────────────────────────────────────────────────────────────── I ──────────
//   :::::: T Y P E   S H A P E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────
//
const items = [
  'Item 1',
  'Item 2',
  'Item 3',
];

const styles = StyleSheet.create({
  absoluteFill: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  content: {
    width: 300,
    height: 200,
    margin: 12,
    borderRadius: 12,
    backgroundColor: "#000000",
  },
  touchable: {
    width: 300,
    height: 200,
    backgroundColor: "#FF00FF",
  },
  menuViewItemContainer: {
    position: "absolute",
    top: 12,
    bottom: 0,
    right: 0,
    width: 40,
    backgroundColor: "#FFFF00",
  },
  icon: {
    alignSelf: "center",
    backgroundColor: "#00FF00",
  },
});

const App = () => {
  const renderItems = useCallback(
    () => items.map((item, index) => {
      return (        
        <View key={index} style={styles.content}>
          <View style={styles.absoluteFill}>
            <TouchableOpacity style={styles.touchable} activeOpacity={1}>
              <View
                    style={[
                        styles.menuViewItemContainer,
                        {
                            left: styles.touchable.width - styles.menuViewItemContainer.width
                        }
                    ]}
                >
                  <MenuView
                      isAnchoredToRight={true}
                      actions={[
                        {
                            id: 'duplicate',
                            title: 'Duplicate',
                        },
                        {
                            id: 'send to event',
                            title: 'Send to Event',
                        },
                        {
                            id: 'delete',
                            title: 'Delete',
                        },
                      ]}
                  >
                      <Icon
                          name="more-vert"
                          containerStyle={styles.icon}
                      />
                  </MenuView>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )
    }),
    [],
  )

  return (
    <SafeAreaView>
      <ScrollView>
        <Col>
          {renderItems()}
        </Col>
      </ScrollView>    
    </SafeAreaView>
  );
};

export default App;
