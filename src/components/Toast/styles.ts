import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: 5,
    minHeight: 80,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 10,
  },
  timing: {
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    height: 10,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  content: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    marginTop: 5,
    fontWeight: '300',
    fontSize: 13,
    color: '#fff',
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  iconStatus: {},
});

export default styles;
