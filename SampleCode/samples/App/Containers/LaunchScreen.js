import React, { Component } from 'react'
import { View, TouchableOpacity, FlatList, RefreshControl, Image, Text, Modal, TextInput, Dimensions, ScrollView } from 'react-native'
import { Colors } from '../Themes'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import NavigationBar from 'react-native-navbar'
import moment from 'moment'
import styles from './Styles/LaunchScreenStyles'
const { width } = Dimensions.get('window')

import { feedData } from '../Lib/DummyData'

export default class LaunchScreen extends Component {

  constructor (props) {
    super(props)
    this.state = {
      refresh: false,
      loading: false,
      showModal: false,
      offerAmount: 0
    }
  }

  render () {
    const { showModal, offerAmount } = this.state
    let submitOffer = offerAmount > 0
    return (
      <View style={styles.container}>
        <NavigationBar
          style={{
            backgroundColor: Colors.header,
          }}
          title={{
            title: 'Home',
            style: { color: 'white', fontSize: 16 }
          }}
          leftButton={<TouchableOpacity style={{ padding: 6, alignItems: 'center', justifyContent: 'center' }}
                                        onPress={() => { this.setState({showModal: true}) }}>
            <FAIcon name='info-circle' size={24} style={{ color: 'white', marginLeft: 10 }}/>
          </TouchableOpacity>}
        />
        <View style={{ flex: 2 }} contentContainerStyle={{ backgroundColor: 'white' }}>
          {feedData &&
          <FlatList
            style={{ backgroundColor: '#E2E7EE' }}
            refreshControl={<RefreshControl
              refreshing={this.state.loading}
            />}
            extraData={this.state.refresh}
            data={feedData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => this.renderChildItem(item, index)}
          />
          }
        </View>
        <Modal
          transparent={true}
          visible={showModal}
          onRequestClose={() => { console.log('onRequestClose') }}>
          <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
            <View style={{
              width: width - 30, backgroundColor: 'white',
              justifySelf: 'center', flexDirection: 'column',
              padding: 20, borderRadius: 10
            }}>
              <Text style={{color: Colors.blueShade, fontWeight: '600', fontSize: 18}}>{'Make an offer'}</Text>
              <Text style={{color: Colors.blueShade, fontWeight: '600', fontSize: 16, marginTop: 20}}>{'Offer amount'}<Text style={{ color: 'red' }}>*</Text></Text>
              <TextInput
                keyboardType='numeric'
                onChangeText={(value) => this.setState({offerAmount: value})}
                style={{ padding: 5, marginTop: 10, width: '100%', height: 40, borderRadius: 6, borderWidth: 1, borderColor: 'grey' }}/>
              <Text style={{color: Colors.blueShade, fontWeight: '600', fontSize: 16, marginTop: 20}}>{'How can you help?'}</Text>
              <TextInput  multiline={true} numberOfLines={4}
                style={{ padding: 5, marginTop: 10, width: '100%', height: 80, borderRadius: 6, borderWidth: 1, borderColor: 'grey' }}
                         />
              <Text style={{color: Colors.charcoal, fontWeight: '500', fontSize: 14, marginTop: 10}}>{'Skills and availability are super helpful.'}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20 }}>
                <TouchableOpacity onPress={() => { this.setState({showModal: false}) }}
                                  style={{
                                    height: 40, backgroundColor: Colors.whiteSmoke, alignItems: 'center',
                                    justifyContent: 'center', borderRadius: 2, paddingLeft: 25,
                                    paddingRight: 25,
                                  }}>
                  <Text style={{ fontSize: 14, color: Colors.blueShade, fontWeight: '600' }}>{'Cancel'}</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={!submitOffer}
                  onPress={() => { this.setState({showModal: false}) }}
                                  style={{
                                    height: 40, backgroundColor: Colors.whiteSmoke, alignItems: 'center',
                                    justifyContent: 'center', borderRadius: 2, paddingLeft: 25,
                                    paddingRight: 25,
                                    marginLeft: 20
                                  }}>
                  <Text style={{ fontSize: 14, color: submitOffer ? Colors.blueShade : '#a0b8e0', fontWeight: '600' }}>{'Submit offer'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          </ScrollView>
        </Modal>
      </View>
    )
  }

  renderChildItem (i, index) {
    return (<View
      style={styles.itemRow}>
      <View style={{ width: '100%' }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Image source={{ uri: i.photo_url }}
                   width={30} style={styles.avatarStyle}/>
            <Text style={styles.username}>{i.username}</Text>
          </View>
          <View>
            {
              !i.isFavour && <View style={styles.price}>
                <Text style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 14,
                  fontWeight: '500'
                }}>{`${'£' + i.price}`}</Text>
              </View>
            }
            {
              i.isFavour && <View style={styles.favour}>
                <Text style={{
                  color: Colors.blueShade,
                  textAlign: 'center',
                  fontSize: 14,
                  fontWeight: '600',
                  padding: 1
                }}>{'FAVOUR'}</Text>
              </View>
            }
          </View>
        </View>
        <Text style={styles.message}>{i.message}</Text>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
            <FAIcon name='tag' size={15} style={{ color: Colors.blueShade }}/>
            <Text style={styles.smallText}>{`${i.num_of_offers + ' offers'}`}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FAIcon name='map-marker' size={15} style={{ color: Colors.blueShade, marginLeft: 10 }}/>
            <Text style={styles.smallText}>{`${i.distance + ' km'}`}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FAIcon name='clock-o' size={15} style={{ color: Colors.blueShade, marginLeft: 10 }}/>
            <Text style={styles.smallText}>{moment(i.created_at).format('ddd, DD MMM')}</Text>
          </View>
        </View>
      </View>
    </View>)
  }
}
