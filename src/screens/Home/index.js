import React, {useState} from 'react';
import {Button, View, TextInput, Text} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import _ from 'lodash';
import styles from './style';
import * as asteroidActions from '../../redux/actions/asteroidActions';
import PropTypes from 'prop-types';
import {createStructuredSelector} from 'reselect';
import {getData} from '../../redux/selectors';
import CustomButton from '../../components/CustomButton';

const Home = ({navigation, data}) => {
  const dispatch = useDispatch();
  const [asteroidId, setAsteroidId] = useState('');

  const handleSubmit = () => {
    console.log(asteroidId);
    dispatch(asteroidActions.getAsteroidData(asteroidId));
    console.log('responseData' + JSON.stringify(data));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(textInputValue) => setAsteroidId(textInputValue)}
        placeholder={'Enter ID'}
        placeholderTextColor="#000"
      />
      <View style={styles.verticalMargin}>
        <CustomButton onPress={handleSubmit} />
      </View>
    </View>
  );
};

Home.propTypes = {
  data: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  data: getData(),
});

export default connect(mapStateToProps)(Home);
