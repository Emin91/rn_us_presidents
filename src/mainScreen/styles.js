import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scroolContainer: {
    flex: 1,
    backgroundColor: '#e9eefc',
  },
  cartContainer: {
    flex: 1,
    width: '95%',
    height: 170,
    marginTop: 10,
    flexDirection: 'row',
  },
  imgContainer: {
    flex: 0.35,
    borderWidth: 6,
    borderColor: 'white',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  descriptionContainer: {
    flex: 0.65,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#d7dae0',
  },
  titleContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  partyContainer: {
    flex: 0.2,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  year: {
    flex: 0.2,
    paddingLeft: 10,
    justifyContent: 'center',
  },
});

export default styles;
