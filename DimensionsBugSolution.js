import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

const MyComponent = () => {
  const [screenDimensions, setScreenDimensions] = useState(null);

  useEffect(() => {
    const getDimensions = () => {
      const dimensions = Dimensions.get('window');
      setScreenDimensions(dimensions);
    };

    getDimensions();

    // Listen for changes in dimensions
    Dimensions.addEventListener('change', getDimensions);

    return () => {
      Dimensions.removeEventListener('change', getDimensions);
    };
  }, []);

  if (!screenDimensions) {
    return <Text>Loading...</Text>; // Or a placeholder
  }

  return (
    <View>
      <Text>Width: {screenDimensions.width}</Text>
      <Text>Height: {screenDimensions.height}</Text>
    </View>
  );
};

export default MyComponent;