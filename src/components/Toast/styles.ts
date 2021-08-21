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
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    marginTop: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  text: {
    marginTop: 5,
    fontWeight: '300',
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
  },
  iconStatus: {},
});

export default styles;
