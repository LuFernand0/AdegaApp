import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={estilo.container}>
      <ScrollView>
        <View style={estilo.pesquisa}>
        <Image style={estilo.icon} source={require('./assets/lupa.png')}></Image>
          <Text style={estilo.txtPesquisa}>Pesquise aqui...</Text>
        </View>

        <Text style={estilo.titulo}>Explore nossos produtos</Text>
        <Text style={estilo.subtitulo}>Encontre o produto ideal para você</Text>

        <View style={estilo.flex}>
          <View style={estilo.card}>
            <Image
              source={require('./assets/heineken.jpg')}
              style={estilo.img}
              resizeMode="center"></Image>
            <Text style={estilo.desc}>Heineken</Text>
          </View>
          <View style={estilo.card}>
            <Image
              source={require('./assets/vodka.jpg')}
              style={estilo.img}
              resizeMode="center"></Image>
            <Text style={estilo.desc}>Vodka</Text>
          </View>
          <View style={estilo.card}>
            <Image
              source={require('./assets/whisky.jpg')}
              style={estilo.img}
              resizeMode="center"></Image>
            <Text style={estilo.desc}>Whisky</Text>
          </View>
          <Text style={estilo.seta} >> </Text>
        </View>

        <Text style={estilo.titulo}>Destaques</Text>
        <View style={estilo.banner}>
          <Image
            source={require('./assets/Gin.jpg')}
            resizeMode="center"
            style={estilo.imgBanner}></Image>

          <View style={estilo.txtBanner}>
            <Text style={estilo.produto}>Gin</Text>
            <Text style={estilo.produtoPreco}>R$58,35</Text>
            <Text style={estilo.produtoDesc}></Text>
          </View>
        </View>

        <View style={estilo.banner}>
          <Image
            source={require('./assets/Licor.jpg')}
            resizeMode="center"
            style={estilo.imgBanner}></Image>

          <View style={estilo.txtBanner}>
            <Text style={estilo.produto}>Licor</Text>
            <Text style={estilo.produtoPreco}>R$74,42</Text>
            <Text style={estilo.produtoDesc}></Text>
          </View>
        </View>

        <View style={estilo.banner}>
          <Image
            source={require('./assets/Vinho.jpg')}
            resizeMode="center"
            style={estilo.imgBanner}></Image>

          <View style={estilo.txtBanner}>
            <Text style={estilo.produto}>Vinho</Text>
            <Text style={estilo.produtoPreco}>R$214,90</Text>
            <Text style={estilo.produtoDesc}></Text>
          </View>
        </View>

        <View style={estilo.menu}>
          <Image style={estilo.icon} source={require('./assets/home.png')}></Image>
          <Text style={estilo.txtMenuAtivo}>Inicio</Text>
          <Image style={estilo.icon} source={require('./assets/carrinho.png')}></Image>
          <Text style={estilo.txtMenu}>Pedidos</Text>
          <Image style={estilo.icon} source={require('./assets/user.png')}></Image>
          <Text style={estilo.txtMenu}>Conta</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 700,
    color: '#000',
  },
  subtitulo: {
    fontWeight: 400,
    fontSize: 15,
    color: 'rgba(200, 200, 200, 0.9)',
  },
  desc: {
    fontSize: 15,
    fontWeight: 700,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    borderStyle: 'solid',
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 0.3
  },
  card: {
    width: 100,
    height: 150,
    marginVertical: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    backgroundColor: 'rgba(200, 200, 200, 0.2)',
    borderRadius: 10,
  },
  img: {
    paddingVertical: 1,
    paddingHorizontal: 5,
    marginBottom: 13,
    width: 100,
    height: 100,
  },
  imgBanner: {
    paddingVertical: 1,
    paddingHorizontal: 5,
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  banner: {
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(220, 220, 220, 0.3)',
    width: 330,
    height: 150,
  },
  txtBanner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    marginRight: 50,
  },
  produto: {
    fontWeight: 700,
    fontSize: 30,
    color: '#000',
  },
  produtoPreco: {
    fontWeight: 700,
    fontSize: 20,
    color: 'rgb(75, 50, 255)',
  },
  produtoDesc: {
    fontWeight: 400,
    fontSize: 13,
    opacity: 0.8,
    color: 'rgba(200, 200, 200, 0.7)',
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtMenu: {
    fontWeight: 600,
    color: 'rgba(150, 150, 150)',
    marginRight: 15
  },
  txtMenuAtivo: {
    fontWeight: 600,
    color: 'rgba(150, 150, 150)',
    borderBottomColor: 'rgba(100, 100, 100)',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderRadius: 0.2,
    marginRight: 15
  },
  seta:{
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    fontWeight: 700,
    fontSize: 35,
    marginLeft: 3,
    position: 'absolute',
    top: 50,
    right: 0,
    transform: 'translate(0, 10%)'
  },
  pesquisa:{
    backgroundColor: '#ddd',
    width: 350,
    height: 40,
    margin: 0,
    borderRadius: 20,
    marginVertical: 10,
    display: 'flex',
    alignItems:'center',
    flexDirection: 'row'
  },
  txtPesquisa:{
    paddingHorizontal: 3,
    paddingVertical: 2,
    color: "rgba(0, 0, 0, 0.5)"
  },
  icon:{
    width: 20,
    height: 20,
    marginHorizontal: 8,
  }
});
