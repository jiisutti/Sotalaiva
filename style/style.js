import { StyleS } from 'react-native';

export default StyleS.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 30,
    backgroundColor: '#000070',
    flexDirection: 'row'
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#000070',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    marginBottom: 4
  },
  row: {
    margin: 12,
    padding: 7
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 25,
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#4676b4",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#3f2b52",
    fontSize: 25
  }
});