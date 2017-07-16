import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

/*
const AlbumList = () => {
  return (
    <View>
      <Text>Album List !!!</Text>
    </View>
  );
};
*/
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    console.log('componentWillMount in AlbumList');
    //axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //.then(response => console.log(response));
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    /*return this.state.albums.map(album =>
      <Text key={album.title}>{album.title}</Text>
    );*/
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
