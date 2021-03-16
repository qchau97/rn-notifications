import React from 'react';
import { Button, View } from 'react-native';

const App = () => {
  const handleNotificationTrigger = () => {
    
  };

  return (
    <View>
      <Button 
      title='Trigger Notification' 
      onPress={handleNotificationTrigger}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
