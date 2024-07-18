import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { container } from '../../../utils/inversify.config';
import { TYPES } from '../../../utils/types';
import { ISampleRepository } from '../../../modules/repositories/ISampleRepository';
import { NavigationProp, NavigationState } from '@react-navigation/native';


const Homescreen = ({ navigation }: any) => {
  const [data, setData] = useState<string | null>(null);
  const repo = container.get<ISampleRepository>(TYPES.SampleRepository);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await repo.getData();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [repo]); // Adding repo as a dependency to avoid potential issues


  return (
    <View>
      <Text>{data || 'Loading...'}</Text>
      <Text>asdsafsfcsdf</Text>
      <Button
        title='next screen'
        onPress={() => {
          navigation.navigate("Profile")
        }} />
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({})