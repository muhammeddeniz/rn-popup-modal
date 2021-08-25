import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const iconSize: number = 60;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    minHeight: 80,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 4,
  },
  content: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    marginTop: iconSize / 1.4,
    color: '#111',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
  },
  text: {
    marginTop: 5,
    fontWeight: '300',
    textAlign: 'center',
    fontSize: 14,
    color: '#111',
    marginBottom: 10,
  },
  iconStatus: {
    position: 'absolute',
    top: -iconSize / 2,
    backgroundColor: '#fff',
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#f8f8f8f8',
  },
  buttonContainer: {
    backgroundColor: '#F1F5F8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  leftButton: {
    backgroundColor: '#D0DEEB',
    alignItems: 'center',
    width: width * 0.4,
    paddingVertical: 10,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  rightButton: {
    backgroundColor: '#13C39C',
    alignItems: 'center',
    width: width * 0.4,
    paddingVertical: 10,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
